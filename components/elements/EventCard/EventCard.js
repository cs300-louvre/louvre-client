import { View, Text, Dimensions } from "react-native";
import Card from "../../organisms/Card/Card";

export default function EventCard({ item }) {
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
    return (
        <View
            style={{
                width: 0.7 * windowWidth,
                paddingHorizontal: "3%"
            }}>
            <Card>
                <Card.Image image={item.coverImage} />
                <Card.Body>
                    <Card.Name>
                        {item.title}
                    </Card.Name>
                    <Text
                        numberOfLines={1}
                        style={{
                            fontFamily: "Roboto_700",
                            fontSize: 14,
                            color: "#B5B5B5",
                        }}>
                        {item.fromDate} - {item.toDate}
                    </Text>
                    <Card.Rating rating={item.rating} />
                    <View
                        style={{
                            display: "flex",
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <View
                            style={{
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "#0085FF",
                                borderRadius: 5,
                                paddingHorizontal: 8
                            }}>
                            <Text
                                numberOfLines={1}
                                style={{
                                    fontFamily: "Roboto_700",
                                    fontSize: 14,
                                    color: "#0085FF",
                                    marginVertical: 1
                                }}>
                                {item.price} VND
                            </Text>
                        </View>
                        <Text
                            numberOfLines={1}
                            style={{
                                fontFamily: "Roboto_700Bold",
                                fontSize: 10,
                                color: "#FFE500",
                            }}>
                            {item.ticketSold} TICKETS SOLD
                        </Text>
                    </View>
                    <Text
                        style={{
                            fontFamily: "Roboto_700",
                            fontSize: 14,
                            color: "#FFFFFF",
                            marginVertical: 1,
                        }}>
                        5.0km
                    </Text>
                </Card.Body>
            </Card>
        </View>
    )
}