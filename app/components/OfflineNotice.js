import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";
import Text from "./AppText";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    top: Constants.statusBarHeight,
    position: "absolute",
    zIndex: 1, // for ios
    elevation: 1, // use for android
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
