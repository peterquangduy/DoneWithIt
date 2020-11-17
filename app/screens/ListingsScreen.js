import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import Button from "../components/AppButton";
import useApi from "../hooks/useApi";

export default function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  handleRefresh = async () => {
    console.log("reload ...");
    setIsRefresh(true);
    await loadListings();
    setIsRefresh(false);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} size="large" />

      <FlatList
        refreshControl={
          <RefreshControl
            style={{
              backgroundColor: "#eee",
            }}
            refreshing={isRefresh}
            onRefresh={handleRefresh}
          />
        }
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
