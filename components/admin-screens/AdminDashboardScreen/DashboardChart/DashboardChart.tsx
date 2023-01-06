import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { fakeEventResponse, fakeMuseumResponse } from "../../../../mock";
import { IEventResponse, IMuseumResponse } from "../../../../types";
import MiniCardCarousel from "../../../elements/MiniCardCarousel/MiniCardCarousel";
import MuseumCard from "../../../elements/MuseumCard/MuseumCard";

const browseEvents: IEventResponse[] = Array.from(Array(30), () => {
    return fakeEventResponse();
});

const browseMuseums: IMuseumResponse[] = Array.from(Array(30), () => {
    return fakeMuseumResponse();
});

export default function DashboardChart() {
    const [searchString, setSearchString] = useState<string>("");
    const navigation = useNavigation<any>();

    const newEvents: IEventResponse[] = browseEvents
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, 5);

    const hotNewEvents: IEventResponse[] = newEvents
        .sort((a, b) => b.rating - a.rating)

    const newMuseums: IMuseumResponse[] = browseMuseums
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, 5);

    const hotNewMuseums: IMuseumResponse[] = newMuseums
        .sort((a, b) => b.rating - a.rating)

    const handlePressFactory = (itemId: string) => {
        return () => {
            // navigation.navigate("Event", {
            //     screen: "EventDetail",
            //     params: {
            //         eventId: itemId,
            //         navigationRoot: "Event",
            //     },
            // });
            console.log(itemId)
        };
    };

    return (
        <ScrollView
            style={{ paddingTop: 60 }}
            contentContainerStyle={{ paddingBottom: 120 }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                    maxHeight: 38,
                    paddingVertical: 5,
                    borderRadius: 20,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    backgroundColor: "#B5B5B5",
                }}
            >
                <Icon name="search" size={30} color="#000000" style={{ paddingLeft: "5%" }} />
                <TextInput
                    style={{
                        flex: 1,
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                        maxHeight: 38,
                        fontSize: 14,
                        fontFamily: "Roboto_400Regular",
                        color: "#000000",
                    }}
                    placeholder="Search..."
                    onChangeText={(text) => setSearchString(text)}
                    value={searchString}
                    onSubmitEditing={(e) => { }}
                />
            </View>
            {
                <View style={{ paddingTop: 10 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 20,
                            marginBottom: 10,
                        }}>
                        <Text
                            style={{
                                color: "#FFFFFF",
                                fontWeight: "500",
                                fontSize: 20,
                            }}
                        >
                            Top Hot Events
                        </Text>
                        <Text
                            style={{
                                color: "#0085FF",
                                fontWeight: "500",
                                fontSize: 18,
                            }}
                        >See all</Text>
                    </View>
                    {
                        <MiniCardCarousel
                            items={hotNewEvents}
                            handlePressFactory={(item) => () =>
                                // navigation.navigate("Event", {
                                //     screen: "EventDetail",
                                //     params: {
                                //         eventId: item.eventId,
                                //         navigationRoot: "Event",
                                //     },
                                // })
                                console.log(item)}
                        />
                    }
                </View>
            }
            {
                <View
                    style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10
                    }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text
                            style={{
                                color: "#FFFFFF",
                                fontWeight: "500",
                                fontSize: 20,
                            }}
                        >
                            Top Hot Museums
                        </Text>
                        <Text
                            style={{
                                color: "#0085FF",
                                fontWeight: "500",
                                fontSize: 18,
                            }}
                        >See all</Text>
                    </View>
                    {hotNewMuseums.map((museum) => (
                        <MuseumCard
                            key={museum.museumId}
                            item={museum}
                            handlePress={() =>
                                // navigation.navigate("Event", {
                                //     screen: "EventDetail",
                                //     params: {
                                //         eventId: museum.museumId,
                                //         navigationRoot: "Event",
                                //     },
                                // })
                                console.log(museum)
                            }
                        />
                    ))}
                </View>
            }
        </ScrollView>
    );
}
