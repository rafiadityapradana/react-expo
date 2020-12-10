import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Routes } from "../Navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Formik } from "formik";

const { width, height } = Dimensions.get("screen");
const WELCOME_HEIGHT = 0.8 * height;

const AppButton = ({ title, submit, backgroundColor }) => (
  <TouchableOpacity
    onPress={() => {
      console.log(submit);
    }}
  >
    <View style={[styles.containerButton, { backgroundColor }]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);
const AppButtonFacebook = ({ title, submit, backgroundColor }) => (
  <TouchableOpacity
    onPress={() => {
      console.log(submit);
    }}
  >
    <View style={[styles.containerButton, { backgroundColor }]}>
      <Text style={styles.appButtonTextfacebok}>{title}</Text>
    </View>
  </TouchableOpacity>
);
const AppButtonGoogle = ({ title, submit, backgroundColor }) => (
  <TouchableOpacity
    onPress={() => {
      console.log(submit);
    }}
  >
    <View style={[styles.containerButton, { backgroundColor }]}>
      <Text style={styles.appButtonTextgoogle}>{title}</Text>
    </View>
  </TouchableOpacity>
);
const Welcome = ({ navigation }: StackNavigationProp<Routes, "Welcome">) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <View style={styles.image}>
          <Image
            source={require("../../../assets/plas.jpg")}
            style={{
              width: width / 2,
              height: width / 2,
            }}
          />
        </View>

        <View style={styles.fromMik}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <View style={styles.fromCard}>
            <Formik initialValues={{ email: "", password: "" }}>
              {({ handleChange, handleBlur, values }) => (
                <View>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="Your Mail"
                  />
                  <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder="Your Password"
                  />
                  <AppButton
                    submit={values}
                    backgroundColor="#3aaaff"
                    title="Sigin"
                  />
                  <View
                    style={{
                      borderBottomColor: "0e49b5",
                      borderBottomWidth: 0.2,
                      marginTop: 40,
                    }}
                  />
                  <View style={styles.rowButton}>
                    <AppButtonFacebook
                      submit={values}
                      backgroundColor="white"
                      title="Facebook"
                    />
                    <AppButtonGoogle
                      submit={values}
                      backgroundColor="white"
                      title="Google"
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: "#96c5fd",
  },
  welcome: {
    height: WELCOME_HEIGHT,
    padding: 4,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    marginTop: width / 8,
    fontFamily: "SFProText-Semibold",
    fontSize: 30,
    textAlign: "center",
  },
  textInput: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
    padding: 6,
    borderRadius: 15,
    borderWidth: 0.3,
    borderColor: "#0e49b5",
    fontFamily: "SFProText-Regular",
    fontSize: 14,
  },
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    // width: width / 2,
    borderRadius: 10,
  },
  appButtonText: {
    textAlign: "center",
    fontSize: 22,

    color: "white",
    fontFamily: "SFProText-Semibold",
    paddingTop: 10,
    paddingBottom: 10,
  },
  appButtonTextfacebok: {
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: "#0e49b5",
    color: "#0e49b5",
    fontFamily: "SFProText-Semibold",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  appButtonTextgoogle: {
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: "#0e49b5",
    color: "red",
    fontFamily: "SFProText-Semibold",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
  },
  fromMik: {
    height: WELCOME_HEIGHT,
    backgroundColor: "white",
    borderRadius: 30,
    textAlign: "center",
  },
  fromCard: {
    marginTop: width / 12,
    marginRight: 10,
    marginLeft: 10,
  },
  rowButton: {
    flexDirection: "row",
    padding: 10,
  },
});
export default Welcome;
