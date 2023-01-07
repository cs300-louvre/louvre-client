import { ScrollView } from "react-native";
import EventCard from "../../../elements/EventCard/EventCard";
import MuseumCard from "../../../elements/MuseumCard/MuseumCard";
import { useNavigation } from "@react-navigation/native";
import { fakeEventResponse, fakeMuseumResponse } from "../../../../mock";
import useGetFollowedMuseum from "../../../../hooks/me/useGetFollowedMuseums";
import useGetFollowedEvent from "../../../../hooks/me/useGetFollowedEvents";
import { shuffleArray } from "../../../../utils";

export const FollowingTab = () => {
  const navigation = useNavigation<any>();
  const { data: museums } = useGetFollowedMuseum();
  const { data: events } = useGetFollowedEvent();
  const results =
    museums && events ? shuffleArray([].concat(museums, events)) : null;

  return (
    <ScrollView
      style={{
        width: "100%",
        paddingHorizontal: 10,
      }}
      contentContainerStyle={{ paddingBottom: 50, paddingTop: 10 }}
    >
      {results &&
        results.map((result: any) =>
          result?.eventId ? (
            <EventCard
              key={result.eventId}
              item={result}
              handlePress={() =>
                navigation.navigate("Account", {
                  screen: "EventDetail",
                  params: {
                    eventId: result.evenId,
                    navigationRoot: "Account",
                  },
                })
              }
            />
          ) : (
            <MuseumCard
              key={result.museumId}
              item={result}
              handlePress={() =>
                navigation.navigate("Account", {
                  screen: "MuseumDetail",
                  params: {
                    museumId: result.museumId,
                    navigationRoot: "Account",
                  },
                })
              }
            />
          )
        )}
    </ScrollView>
  );
};

export default FollowingTab;
