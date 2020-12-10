import React from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { Routes } from "../../Components/Navigation";

interface SlideProps {
  lable: string;
  getstarted?: boolean;
  color: string;
  sub: string;
  img: string;
  root: string;
}

const { width, height } = Dimensions.get("screen");
export const SLIDE_HEIGHT = 0.8 * height;

const AppButton = ({ out }) => (
  <TouchableOpacity
    onPress={() => {
      out.navigate("Welcome");
    }}
  >
    <View style={styles.containerButton}>
      <Text style={styles.appButtonText}>Let's get started</Text>
    </View>
  </TouchableOpacity>
);

const Slide = ({ lable, color, sub, img, getstarted, root }: SlideProps) => {
  // const transform = [
  //   { translateY: (SLIDE_HEIGHT - 200) / 2 },
  //   { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
  //   // { rotate: right ? "-90deg" : "90deg" },
  // ];
  return (
    <View style={styles.container}>
      <View style={[styles.titlecontainer]}>
        <Image
          source={img}
          style={{
            width: width,
            height: height / 2,
          }}
        />
      </View>

      <View style={styles.titlesub}>
        <Text style={[styles.subtitle, { color }]}>{lable}</Text>
        <Text style={[styles.sub, { color }]}>{sub}</Text>
      </View>
      <View style={styles.button}>
        {getstarted ? <AppButton out={root} /> : <View></View>}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width,
  },
  titlecontainer: {
    height: 100,
    justifyContent: "center",
    paddingTop: SLIDE_HEIGHT / 2,
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    lineHeight: 80,
    fontFamily: "SFProText-Bold",
  },
  titlesub: {
    justifyContent: "center",
    flex: 1,
    paddingTop: SLIDE_HEIGHT / 3,
    padding: 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 22,
    fontFamily: "SFProText-Semibold",
  },
  sub: {
    textAlign: "center",
    fontFamily: "SFProText-Regular",
  },
  button: {
    paddingTop: 20,
    padding: 60,
  },
  containerButton: {
    backgroundColor: "white",
    borderRadius: 300,
  },
  appButtonText: {
    fontSize: 20,
    color: "#153e90",
    fontFamily: "SFProText-Semibold",
    alignSelf: "center",
    margin: 10,
  },
});
export default Slide;
