import { View, Text, TouchableOpacity } from "react-native"
import { Icon } from "@rneui/themed";
import useSignOut from "../../../hooks/user/useSignOut";

export default function AdminAccountScreen() {
    const { mutateAsync: mutateSignout } = useSignOut();

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
        <View style={{ flex: 1, backgroundColor: "#000000" }}>
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
                <MenuItem color="#FF3333" onPress={() => mutateSignout()}>
                    Sign out
                </MenuItem>
            </View>
        </View>
    )
}