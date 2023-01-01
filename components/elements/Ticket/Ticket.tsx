import { ITicketResponse } from "../../../types";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { formatNumber } from "../../../utils";
import { Icon } from "@rneui/themed";
import { TICKET_STATUS } from "../../../const";

export const Ticket: React.FC<{
  item: ITicketResponse;
  handlePress: () => void;
}> = ({ item, handlePress }) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", margin: 10 }}
      onPress={handlePress}
    >
      <Image
        style={{ width: 100, height: 100, borderRadius: 10, marginRight: 10 }}
        source={{ uri: item.thumbnailUrl }}
      />

      <View style={{ height: 100, justifyContent: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {item.status === "wait" && (
            <>
              <Icon
                name="payment"
                type="material-icons"
                color="#FFA500"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "#FFA500", fontWeight: "bold" }}>
                Wait for Payment
              </Text>
            </>
          )}
          {item.status === "paid" && (
            <>
              <Icon
                name="ticket"
                type="entypo"
                color="#00BB00"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "#00BB00", fontWeight: "bold" }}>
                Purchased
              </Text>
            </>
          )}
          {item.status === "used" && (
            <>
              <Icon
                name="archive"
                type="entypo"
                color="#B5B5B5"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "#B5B5B5", fontWeight: "bold" }}>Used</Text>
            </>
          )}
        </View>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: "Roboto_700Bold",
            fontSize: 16,
            color: "#FFFFFF",
          }}
        >
          {item.name}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: "Roboto_400Regular",
            fontSize: 14,
            color: "#B5B5B5",
          }}
        >
          {`${formatNumber(item.price)}đ - ${item.purchasedAt}`}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: "Roboto_400Bold",
            fontSize: 16,
            color: "#FFFFFF",
          }}
        >
          {item.location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Ticket;
