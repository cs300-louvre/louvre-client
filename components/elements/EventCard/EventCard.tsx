import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Card from "../../organisms/Card/Card";
import { useNavigation } from "@react-navigation/native";
import { IEventResponse } from "../../../types";
import { formatNumber } from "../../../utils";

export const EventCard: React.FC<{ item: IEventResponse }> = ({ item }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={{
        width: windowWidth - 40,
        paddingVertical: 10,
        overflow: "hidden",
      }}
      onPress={() =>
        navigation.navigate("Event", {
          screen: "EventDetail",
          params: {
            item: item,
          },
        })
      }
    >
      <Card>
        <Card.Image
          image={item.coverUrl}
          style={{ width: 100, height: 100, borderRadius: 5 }}
        />
        <Card.Body>
          <Card.Name>{item.name}</Card.Name>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "Roboto_700",
              fontSize: 14,
              color: "#B5B5B5",
            }}
          >
            {item.startTime} - {item.endTime}
          </Text>
          <Card.Rating rating={item.rating} numReviews={item.numOfReviews} />
          <View
            style={{
              display: "flex",
              width: windowWidth - 100 - 45,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "#0085FF",
                borderRadius: 5,
                paddingHorizontal: 8,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "Roboto_700",
                  fontSize: 14,
                  color: "#0085FF",
                  marginVertical: 1,
                }}
              >
                {formatNumber(item.ticketPrice)}đ
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "Roboto_700Bold",
                fontSize: 12,
                color: "#FFE500",
              }}
            >
              {item.sales} TICKETS SOLD
            </Text>
          </View>
        </Card.Body>
      </Card>
    </TouchableOpacity>
  );
};

export default EventCard;
