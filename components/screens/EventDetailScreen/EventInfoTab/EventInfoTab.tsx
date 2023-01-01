import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { fakeMuseumResponse } from "../../../../mock";
import { IEventResponse } from "../../../../types";
import MuseumCard from "../../../elements/MuseumCard/MuseumCard";

const museum = fakeMuseumResponse();

export const EventInfoTab: React.FC<{
  item: IEventResponse;
  navigationRoot: string;
}> = ({ item, navigationRoot }) => {
  const navigation = useNavigation<any>();
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
        Time
      </Text>
      <Text
        style={{
          color: "#FFFFFF",
          fontFamily: "Roboto_400Regular",
          marginBottom: 20,
        }}
      >
        {`From ${item.startTime} to ${item.endTime}`}
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
              navigationRoot: navigationRoot,
            },
          })
        }
      />
    </View>
  );
};

export default EventInfoTab;