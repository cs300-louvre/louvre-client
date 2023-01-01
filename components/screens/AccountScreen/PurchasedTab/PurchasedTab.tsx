import { fakeTicket } from "../../../../mock";
import { ScrollView, View } from "react-native";
import Ticket from "../../../elements/Ticket/Ticket";

const tickets = Array.from(Array(10), () => {
  return fakeTicket();
});

export const PurchasedTab = () => {
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
          <Ticket item={ticket} key={ticket.ticketId} handlePress={() => {}} />
        ))}
      </ScrollView>
    </View>
  );
};

export default PurchasedTab;
