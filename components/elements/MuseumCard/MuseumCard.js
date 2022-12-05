import { View, Text, Dimensions } from "react-native";
import Card from "../../organisms/Card/Card";

export default function MuseumCard({ item }) {
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
                    <Card.Rating rating={item.rating} numReviews={item.numReviews} />
                    <Text
                        numberOfLines={1}
                        style={{
                            fontFamily: "Roboto_700",
                            fontSize: 14,
                            color: "#FFFFFF",
                        }}>
                        {item.address}
                    </Text>
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