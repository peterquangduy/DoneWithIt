import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

export default function ListItemSeparator() {
  return (
    <View>
      <View style={styles.seperator} />
    </View>
  );
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
