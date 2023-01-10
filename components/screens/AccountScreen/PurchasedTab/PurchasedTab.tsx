import { fakeTicket } from "../../../../mock";
import { ScrollView, View } from "react-native";
import Ticket from "../../../elements/Ticket/Ticket";
import { useNavigation } from "@react-navigation/native";
import useGetMyTickets from "../../../../hooks/me/useGetMyTickets";

export const PurchasedTab = () => {
  const navigation = useNavigation<any>();
  const { data: tickets } = useGetMyTickets();
  return (
    <View>
      <ScrollView
        style={{
          width: "100%",
          paddingHorizontal: 10,
        }}
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 10 }}
      >
        {tickets &&
          tickets.map((ticket) => (
            <Ticket
              item={ticket}
              key={ticket.ticketId}
              handlePress={() =>
                navigation.navigate("Account", {
                  screen: "TicketDetail",
                  params: {
                    ticketId: ticket.ticketId,
                    navigationRoot: "Account",
                  },
                })
              }
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default PurchasedTab;
