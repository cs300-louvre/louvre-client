import { View, Text } from "react-native";
import Card from "../../organisms/Card/Card";
import { Dimensions, TouchableOpacity, TextInput, Image } from "react-native";
import { Icon } from "@rneui/themed";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from "react-native-gesture-handler";
import CustomizedButton from "../../organisms/Button/Button";
import {
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import useGetMuseumById from "../../../hooks/museum/useGetMuseumById";
import MuseumUpdatesTab from "../../screens/MuseumDetailScreen/MuseumUpdatesTab/MuseumUpdatesTab";
import { ImageInfo, ImagePickerCancelledResult } from "expo-image-picker";
import EventUpdatesTab from "../../screens/EventDetailScreen/EventUpdatesTab/EventUpdatesTab";

export default function AdminDetailScreen({ item }) {
    const route = useRoute<any>();
    let event = item
    let isMuseumDetail = true
    if (route.params != undefined) {
        const { itemData, navigationRoot } = route.params;
        event = itemData
        isMuseumDetail = false
    }
    const [updates, setUpdates] = useState<string>("");
    const [image, setImage] = useState(null);
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
    const navigation = useNavigation<any>();

    const ticketId = "aji8y93218";

    if (!event) return null;

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const result: ImagePickerCancelledResult | ImageInfo = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // base64: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

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
        <ScrollView
            contentContainerStyle={{
                paddingTop: 10,
                paddingBottom: 60,
                paddingHorizontal: 20,
                backgroundColor: "#000000",
                position: "relative",
            }}
        >
            <Card>
                <Card.Image
                    image={event.thumbnailUrl}
                    style={{
                        width: 145,
                        height: 145,
                        borderRadius: 5,
                    }}
                />
                <Card.Body
                    containerStyle={{ minHeight: 145, justifyContent: "space-between" }}
                >
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: windowWidth - 145 - 40, // Hard coded value
                        }}
                    >
                        <Card.Name numberOfLine={2} containerStyle={{ width: "80%" }}>
                            {event.name}
                        </Card.Name>
                        <Text
                            numberOfLines={2}
                            style={{
                                fontFamily: "Roboto_700",
                                fontSize: 12,
                                color: "#B5B5B5",
                            }}
                        >
                            {event.location}
                        </Text>
                    </View>
                    <Card.Rating
                        rating={event.rating}
                        numReviews={event.numOfReviews}
                        size={15}
                    />
                    <View
                        style={{
                            display: "flex",
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "58%", // Hard coded value
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        fontFamily: "Roboto_700",
                                        fontWeight: "700",
                                        fontSize: 10,
                                        color: "#B5B5B5",
                                        marginVertical: 1
                                    }}
                                >
                                    {event.genre.toUpperCase()}
                                </Text>
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        fontFamily: "Roboto_700",
                                        fontWeight: "700",
                                        fontSize: 12,
                                        color: "#0085FF",
                                        marginVertical: 1,
                                    }}
                                >
                                    {event.sales} TICKETS SOLD
                                </Text>
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        fontFamily: "Roboto_700",
                                        fontWeight: "700",
                                        fontSize: 12,
                                        color: "#0085FF",
                                        marginVertical: 1,
                                    }}
                                >
                                    {event.numOfFollowers} FOLLOWERS
                                </Text>
                            </View>
                            <TouchableOpacity>
                                <Icon
                                    type="material-community"
                                    name="qrcode-scan"
                                    size={40}
                                    color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card.Body>
            </Card>
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
                        console.log("Tickets sold/used")
                    }
                >
                    Tickets sold/used
                </MenuItem>
                <MenuItem
                    underlined
                    onPress={() =>
                        console.log("Reviews")
                    }
                >
                    Reviews
                </MenuItem>
                <MenuItem
                    underlined
                    onPress={() =>
                        console.log("Followers")
                    }
                >
                    Followers
                </MenuItem>
                <MenuItem
                    onPress={() =>
                        isMuseumDetail ? navigation.navigate("Museum", {
                            screen: "EditMuseum",
                            params: {
                                museum: event,
                                navigationRoot: "Museum",
                            },
                        }) : navigation.navigate("Event", {
                            screen: "EditEvent",
                            params: {
                                event: event,
                                navigationRoot: "Event",
                            },
                        })
                    }
                >
                    Edit
                </MenuItem>
            </View>
            <View
                style={{
                    display: "flex",
                    marginVertical: 10,
                }}
            >
                <Text
                    style={{
                        color: "#FFFFFF",
                        fontWeight: "500",
                        fontSize: 20,
                        paddingVertical: 10,
                    }}
                >
                    Announcements
                </Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <TextInput
                        style={{
                            flex: 1,
                            paddingHorizontal: 16,
                            paddingVertical: 5,
                            borderRadius: 10,
                            maxHeight: 38,
                            fontSize: 14,
                            fontFamily: "Roboto_400Regular",
                            color: "#000000",
                            backgroundColor: "#B5B5B5",
                        }}
                        placeholder="Share some updates..."
                        onChangeText={(text) => setUpdates(text)}
                        value={updates}
                        onSubmitEditing={(e) => { }}
                    />
                    <TouchableOpacity
                        onPress={pickImage}>
                        <Icon
                            name="image"
                            color="#0085FF"
                            size={40}
                            type="feather"
                            style={{ marginLeft: 10 }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: 10,
                    }}
                >
                    <Text
                        style={{
                            color: "#B5B5B5",
                            fontFamily: "Roboto_400Regular",
                            fontSize: 14,
                        }}
                    >{`${updates ? 1000 - updates.length : 1000
                        } character(s) left`}</Text>
                    <CustomizedButton title="Post" handlePress={() => console.log("create")} />
                </View>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                {image && <CustomizedButton title="Delete" handlePress={() => setImage(null)} />}
            </View>
            {item == undefined ? <EventUpdatesTab eventId={event.eventId} /> : <MuseumUpdatesTab museumId={item.museumId} />}
        </ScrollView>
    );
};