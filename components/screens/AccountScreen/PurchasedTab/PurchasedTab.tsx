import { fakeTicket } from "../../../../mock";
import { ScrollView, View } from "react-native";
import Ticket from "../../../elements/Ticket/Ticket";
import { useNavigation } from "@react-navigation/native";

const tickets = Array.from(Array(10), () => {
  return fakeTicket();
});

export const PurchasedTab = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <ScrollView
        style={{
          width: "100%",
          paddingHorizontal: 10,
        }}
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 10 }}
      >
        {tickets.map((ticket) => (
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
