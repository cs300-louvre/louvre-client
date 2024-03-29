import { useRoute, useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import {
  fakeMessageResponse,
  fakeMuseumResponse,
  fakeTicket,
} from "../../../mock";
import { Text } from "@rneui/themed";
import { View, TouchableOpacity, Image } from "react-native";
import { getTicketById } from "../../../api";
import MuseumCard from "../../elements/MuseumCard/MuseumCard";
import { formatDate, formatNumber } from "../../../utils";
import useGetTicketByTicketId from "../../../hooks/ticket/useGetTicketByTicketId";
import useGetMuseumById from "../../../hooks/museum/useGetMuseumById";
import { useQuery } from "react-query";
import * as api from "../../../api";

const museum = fakeMuseumResponse();

export const TicketDetailScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { ticketId, navigationRoot } = route.params;
  const { data: ticket } = useGetTicketByTicketId(ticketId);
  const { data: museum } = useGetMuseumById(ticket?.museumId, !!ticket);

  if (!ticket) return null;

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingBottom: 60,
        paddingHorizontal: 20,
      }}
    >
      {ticket?.status === "paid" && (
        <View style={{ width: "100%", marginBottom: 20, alignItems: "center" }}>
          <Icon
            name="checkcircle"
            type="ant-design"
            color="#00FFA3"
            size={50}
            style={{ marginBottom: 5 }}
          />
          <Text style={{ color: "#00FFA3", fontWeight: "bold", fontSize: 20 }}>
            Ticket purchased successfully!
          </Text>
        </View>
      )}
      {ticket?.status === "used" && (
        <View style={{ width: "100%", marginBottom: 20, alignItems: "center" }}>
          <Icon
            name="archive"
            type="entypo"
            color="#B5B5B5"
            size={50}
            style={{ marginBottom: 5 }}
          />
          <Text style={{ color: "#B5B5B5", fontWeight: "bold", fontSize: 20 }}>
            Your ticket is archived!
          </Text>
        </View>
      )}
      {ticket?.status === "wait" && (
        <View style={{ width: "100%", marginBottom: 20, alignItems: "center" }}>
          <Icon
            name="payment"
            type="material-icons"
            color="#FFA500"
            size={50}
            style={{ marginBottom: 5 }}
          />
          <Text
            style={{
              color: "#FFA500",
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            Waiting for your payment!
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                paddingVertical: 5,
                paddingHorizontal: 20,
                fontWeight: "bold",
                fontSize: 20,
                borderRadius: 5,
                backgroundColor: "#0085FF",
                color: "#FFFFFF",
              }}
            >
              Pay now
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 145, height: 145, borderRadius: 5, marginRight: 10 }}
          source={{ uri: ticket?.thumbnailUrl }}
        />
        <View style={{ height: 145, justifyContent: "space-between" }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "Roboto_700Bold",
              fontSize: 20,
              color: "#FFFFFF",
              marginBottom: 5,
            }}
          >
            {ticket?.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "Roboto_400Regular",
              fontSize: 14,
              color: "#B5B5B5",
            }}
          >
            {`${formatNumber(ticket?.price)}đ}`}
          </Text>

          {ticket?.status !== "wait" && (
            <Image
              style={{ width: 90, height: 90, borderRadius: 5 }}
              source={{
                uri: `https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=200x200&chl=${ticket?.ticketId}`,
              }}
            />
          )}
        </View>
      </View>
      {ticket?.startTime && ticket?.endTime && (
        <>
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontFamily: "Roboto_700Bold",
              marginTop: 20,
            }}
          >
            Time
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Roboto_400Regular",
              marginBottom: 20,
            }}
          >
            {`From ${ticket?.startTime} to ${ticket?.endTime}`}
          </Text>
        </>
      )}

      <Text
        style={{
          color: "#FFFFFF",
          fontWeight: "bold",
          fontFamily: "Roboto_700Bold",
        }}
      >
        Location
      </Text>
      <Text
        style={{
          color: "#FFFFFF",
          fontFamily: "Roboto_400Regular",
          marginBottom: 20,
        }}
      >
        {ticket?.location}
      </Text>
      <Text
        style={{
          color: "#FFFFFF",
          fontWeight: "bold",
          fontFamily: "Roboto_700Bold",
        }}
      >
        Price
      </Text>
      <Text
        style={{
          color: "#FFFFFF",
          fontFamily: "Roboto_400Regular",
          marginBottom: 20,
        }}
      >
        {ticket?.price}
      </Text>
      {museum && (
        <>
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontFamily: "Roboto_700Bold",
            }}
          >
            Organizer
          </Text>
          <MuseumCard
            item={museum}
            handlePress={() =>
              navigation.navigate(navigationRoot, {
                screen: "MuseumDetail",
                params: {
                  museumId: museum.museumId,
                  navigationRoot,
                },
              })
            }
          />
        </>
      )}

      <Text
        style={{
          color: "#FFFFFF",
          fontWeight: "bold",
          fontFamily: "Roboto_700Bold",
        }}
      >
        QR Code
      </Text>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        {ticket?.status !== "wait" && (
          <Image
            style={{ width: 300, height: 300, borderRadius: 5 }}
            source={{
              uri: `https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=300x300&chl=${ticket?.ticketId}`,
            }}
          />
        )}
      </View>

      <Text
        style={{
          color: "#B5B5B5",
          fontFamily: "Roboto_400Regular",
          marginBottom: 20,
          marginTop: 10,
        }}
      >
        You should only show the QR code to the event staffs at the check-in
        point.
      </Text>
    </ScrollView>
  );
};

export default TicketDetailScreen;
