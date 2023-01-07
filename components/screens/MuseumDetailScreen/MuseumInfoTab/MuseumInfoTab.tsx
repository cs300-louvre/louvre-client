import { View, Text, ScrollView } from "react-native";
import { fakeEventResponse, fakeMuseumResponse } from "../../../../mock";
import { IMuseumResponse } from "../../../../types";
import EventCard from "../../../elements/EventCard/EventCard";
import { useNavigation } from "@react-navigation/native";
import useGetEventByMuseumId from "../../../../hooks/event/useGetEventByMuseumId";

export const MuseumInfoTab: React.FC<{
  item: IMuseumResponse;
  navigationRoot: string;
}> = ({ item, navigationRoot }) => {
  const navigation = useNavigation<any>();
  const { data: events } = useGetEventByMuseumId(item.museumId);

  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          color: "#FFFFFF",
          fontWeight: "bold",
          fontFamily: "Roboto_700Bold",
        }}
      >
        Description
      </Text>
      <Text
        style={{
          color: "#FFFFFF",
          fontFamily: "Roboto_400Regular",
          marginBottom: 20,
        }}
      >
        {item.description}
      </Text>
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
        {item.location}
      </Text>
      {events && events.length && (
        <>
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontFamily: "Roboto_700Bold",
            }}
          >
            Events
          </Text>
          {events.map((event) => (
            <EventCard
              item={event}
              key={event.eventId}
              handlePress={() =>
                navigation.navigate(navigationRoot, {
                  screen: "EventDetail",
                  params: {
                    eventId: event.eventId,
                    navigationRoot: navigationRoot,
                  },
                })
              }
            />
          ))}
        </>
      )}
    </View>
  );
};

export default MuseumInfoTab;
