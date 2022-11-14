import { View, Image, Text, Dimensions } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Button } from "@rneui/themed";
import styles from "./CustomStyles";

export default function LoginScreen() {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
      <Button
        containerStyle={[styles.button, { marginBottom: 20 }]}
        buttonStyle={[styles.loginButton]}
        titleStyle={[styles.blackText]}
      >
        Login
      </Button>
      <Button
        containerStyle={[styles.button]}
        buttonStyle={[styles.registerButton]}
      >
        Sign up
      </Button>
    </View>
  );
}
