import { View, Image } from "react-native";

export default function Card({ children }) {
  return (
    <View
      style={{
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
      }}
    >
      {children}
    </View>
  );
}

Card.Image = ({ image }) => {
  return (
    <Image
      style={{ width: 100, height: 100 }}
      resizeMode="cover"
      source={{ uri: image }}
    />
  );
};

Card.Name = ({ children }) => {
  return (
    <Text
      numberOfLines={1}
      style={{
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
        color: "#FFFFFF",
        marginBottom: 1,
      }}
    >
      {children}
    </Text>
  );
};

Card.Text = ({ children }) => {
  return (
    <Text
      numberOfLines={1}
      style={{
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
        color: "#FFFFFF",
        marginVertial: 1,
      }}
    >
      {children}
    </Text>
  );
};
