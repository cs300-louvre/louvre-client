import { View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const Banner: React.FC<{ text: string }> = ({ text }) => {
  return (
    <LinearGradient
      colors={["#5A0DFF", "#151369"]}
      style={{
        width: 200,
        height: 90,
        borderRadius: 5,
        marginRight: 5,
        paddingLeft: 20,
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto_700Bold",
          color: "#FFFFFF",
          fontSize: 18,
        }}
      >
        {text}
      </Text>
    </LinearGradient>
  );
};
