import TabNavigator from "../../elements/TabNavigator/TabNavigator";
import { Text, View } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { StyleSheet } from "react-native";

export default function MuseumTabNavigator({ state, descriptors, navigation }) {
  const items = state.routes.map((route) => {
    const { options } = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;
    const onPress = () => {
      navigation.navigate({ name: route.name, merge: true });
    };
    return { label, onPress };
  });

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 57,
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        borderBottomColor: "#363636",
        borderBottomWidth: 0.8,
      }}
    >
      <BlurView
        overlayColor=""
        blurType="dark"
        blurAmount={32}
        style={StyleSheet.absoluteFill}
      />
      <Text
        style={{
          fontFamily: "Roboto_400Regular",
          fontSize: 18,
          color: "#0085FF",
          position: "absolute",
          left: 10,
          alignItems: "center",
        }}
      >
        Genres
      </Text>
      <TabNavigator items={items} activeIndex={state.index} />
    </View>
  );
}
