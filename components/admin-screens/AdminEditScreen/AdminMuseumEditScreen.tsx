import { View, Text } from "react-native"
import { useRoute } from "@react-navigation/native";
import useGetMuseumById from "../../../hooks/museum/useGetMuseumById";
import { IMuseumResponse } from "../../../types";
import { fakeMuseumResponse } from "../../../mock";
import EditMuseumForm from "./EditMuseumForm";

const browseMuseums: IMuseumResponse[] = Array.from(Array(1), () => {
    return fakeMuseumResponse();
});

export default function AdminMuseumEditScreen() {
    const route = useRoute<any>();
    const { museum, navigationRoot } = route.params;
    // const museum = useGetMuseumById(museumId)
    return (
        <View style={{ flex: 1, backgroundColor: "#000000" }}>
            <Text
                style={{
                    color: "#FFFFFF",
                    fontWeight: "500",
                    fontSize: 24,
                    paddingVertical: 10,
                    paddingBottom: 22,
                    paddingHorizontal: 10
                }}
            >
                {museum.name}
            </Text>
            <EditMuseumForm museum={museum} navigationRoot={navigationRoot} />
        </View>
    )
}