import React from "react";
import { useFormikContext } from "formik";

import { StyleSheet } from "react-native";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({
  name,
  keyboardType,
  width,
  ...otherProps
}) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        //icon="email"
        //autoCapitalize="none"
        //autoCorrect={false}
        //keyboardType="email-address"

        //placeholder="Email"
        //textContentType="emailAddress"
        keyboardType={keyboardType}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
