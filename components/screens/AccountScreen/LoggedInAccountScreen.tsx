import { Icon } from "@rneui/themed";
import { Image, View, Text, TouchableOpacity, Button } from "react-native";
import { fakeGetMeResponse } from "../../../mock";
import { useNavigation } from "@react-navigation/native";

const user = fakeGetMeResponse("user");
export const LoggedInAccountScreen = () => {
  const navigation = useNavigation<any>();
  const MenuItem = ({
    underlined = false,
    color = "#0085FF",
    children,
    ...props
  }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 5,
        marginBottom: 5,
        borderColor: color,
        borderBottomWidth: underlined ? 1 : 0,
      }}
      {...props}
    >
      <Text
        style={{
          color: color,
          fontFamily: "Roboto_400Regular",
          fontSize: 18,
          paddingVertical: 5,
        }}
      >
        {children}
      </Text>
      <Icon name="right" type="ant-design" color={color} size={18} />
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          overflow: "hidden",
          position: "relative",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{ uri: user.thumbnailUrl }}
        />
        <Text
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            color: "#FFFFFF",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          EDIT
        </Text>
      </View>
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 20,
          fontFamily: "Roboto_700Bold",
        }}
      >
        {user.name}
      </Text>
      <Text
        style={{
          color: "#B5B5B5",
        }}
      >
        {user.email}
      </Text>
      <View
        style={{
          width: "100%",
          borderRadius: 10,
          backgroundColor: "#202020",
          marginTop: 20,
          paddingTop: 10,
          paddingHorizontal: 20,
        }}
      >
        <MenuItem
          underlined
          onPress={() =>
            navigation.navigate("Account", {
              screen: "PurchasedTab",
              params: {
                navigationRoot: "Account",
              },
            })
          }
        >
          Purchased
        </MenuItem>
        <MenuItem
          underlined
          onPress={() =>
            navigation.navigate("Account", {
              screen: "FollowingTab",
              params: {
                navigationRoot: "Account",
              },
            })
          }
        >
          Following
        </MenuItem>
        <MenuItem
          onPress={() =>
            navigation.navigate("Account", {
              screen: "RatingTab",
              params: {
                navigationRoot: "Account",
              },
            })
          }
        >
          Reviews
        </MenuItem>
      </View>
      <View
        style={{
          width: "100%",
          borderRadius: 10,
          backgroundColor: "#202020",
          marginTop: 20,
          paddingTop: 10,
          paddingHorizontal: 20,
        }}
      >
        <MenuItem color="#FF3333">Sign out</MenuItem>
      </View>
    </View>
  );
};

export default LoggedInAccountScreen;
