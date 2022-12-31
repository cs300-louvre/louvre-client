import TabNavigator from "./TabNavigator";
import { Text, View } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { StyleSheet } from "react-native";

export default function DetailTabNavigator({ state, descriptors, navigation }) {
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
        height: 67,
        backgroundColor: "rgba(0,0,0,0)",
      }}
    >
      <TabNavigator items={items} activeIndex={state.index} />
    </View>
  );
}
