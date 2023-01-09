import { View, Text } from "react-native"
import { useRoute } from "@react-navigation/native";
import useGetMuseumById from "../../../hooks/museum/useGetMuseumById";
import { IMuseumResponse } from "../../../types";
import { fakeMuseumResponse } from "../../../mock";
import EditForm from "./EditForm";

const browseMuseums: IMuseumResponse[] = Array.from(Array(1), () => {
    return fakeMuseumResponse();
});

export default function AdminMuseumEditScreen() {
    const route = useRoute<any>();
    const { museumId, navigationRoot } = route.params;
    // const museum = useGetMuseumById(museumId)
    const museum = browseMuseums[0]
    return (
        <View style={{ flex: 1, backgroundColor: "#000000" }}>
            <Text
                style={{
                    color: "#FFFFFF",
                    fontWeight: "500",
                    fontSize: 20,
                    paddingVertical: 10,
                }}
            >
                ABC Museum
            </Text>
            <EditForm museum={museum} />
        </View>
    )
}