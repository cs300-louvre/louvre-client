import { View, Text } from "react-native"
import { useRoute } from "@react-navigation/native";
import useGetMuseumById from "../../../hooks/museum/useGetMuseumById";
import { IMuseumResponse } from "../../../types";
import { fakeMuseumResponse } from "../../../mock";
import EditEventForm from "./EditEventForm";


export default function AdminEventEditScreen() {
    const route = useRoute<any>();
    const { event, navigationRoot } = route.params;
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
                    paddingHorizontal: 10,
                }}
            >
                {event.name}
            </Text>
            <EditEventForm event={event} navigationRoot={navigationRoot} />
        </View>
    )
}