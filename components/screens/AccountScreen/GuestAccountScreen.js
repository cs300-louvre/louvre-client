import { View, Image, Text, Dimensions } from "react-native";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function GuestAccountScreen({ navigation }) {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const [tab, setTab] = useState("login");
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: tabBarHeight,
      }}
    >
      <Image
        source={require("../../../assets/background.png")}
        style={{
          position: "absolute",
          width: windowWidth,
          height: windowHeight,
        }}
      />
      <View
        style={{
          position: "absolute",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          top: 70,
        }}
      >
        <Text
          style={[
            {
              fontFamily: "Fraunces_400Regular",
              fontSize: 40,
              color: "#FFFFFF",
            },
          ]}
        >
          Lourve
        </Text>
        <Text
          style={[
            {
              fontFamily: "Fraunces_400Regular",
              fontSize: 16,
              color: "#FFFFFF",
              textAlign: "center",
            },
          ]}
        >
          Login for advanced features!
        </Text>
      </View>
      {tab == "login" ? (
        <LoginForm setTab={setTab} />
      ) : (
        <RegisterForm setTab={setTab} />
      )}
    </View>
  );
}
