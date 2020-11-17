import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

export default function AppTextInput({
  icon,
  keyboardType,
  returnKeyType,
  width = "100%",
  ...otherProps
}) {
  return (
    <View style={[styles.containter, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}

      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        returnKeyType={
          keyboardType == "numeric" || "number-pad"
            ? defaultStyles.numericInputDone.keyboardType
            : null
        }
        keyboardType={keyboardType}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    //width: "100%",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
});
