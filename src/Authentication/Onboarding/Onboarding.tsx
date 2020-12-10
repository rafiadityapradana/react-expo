import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { Routes } from "../../Components/Navigation";

import Slide, { SLIDE_HEIGHT } from "./Slide";
const { width } = Dimensions.get("window");

const Onboarding = ({
  navigation,
}: StackNavigationProp<Routes, "Onboarding">) => {
  //console.log(navigation);
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Slide
            lable="Anda Suka Kopi ?"
            sub="Pastinya Anda Suka Kopi Jika Anda Mengunakan Aplikasi ini  "
            color="#153e90"
            img={require("../../../assets/images/2.jpg")}
          />
          <Slide
            lable="label 2"
            sub="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maxime  "
            color="#153e90"
            img={require("../../../assets/images/4.jpg")}
          />
          <Slide
            lable="label 3"
            sub="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maxime  "
            color="#153e90"
            img={require("../../../assets/images/3.jpg")}
          />
          <Slide
            lable=""
            sub="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maxime  "
            color="#153e90"
            img={require("../../../assets/images/1.jpg")}
            root={navigation}
            getstarted
          />
        </Animated.ScrollView>
      </View>
      {/* <View style={styles.footer}>
        <View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "white" }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: "#318fb5",
            borderTopLeftRadius: 75,
          }}
        ></View>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#96c5fd",
  },
  footer: {
    flex: 1,
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "#96c5fd",
    borderBottomRightRadius: 75,
  },
});
export default Onboarding;
