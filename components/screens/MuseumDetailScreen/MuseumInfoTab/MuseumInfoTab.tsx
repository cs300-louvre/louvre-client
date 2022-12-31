import { View, Text, ScrollView } from "react-native";
import { fakeMuseumResponse } from "../../../../mock";
import { IMuseumResponse } from "../../../../types";

const museum = fakeMuseumResponse();

export const MuseumInfoTab: React.FC<{ item: IMuseumResponse }> = ({
  item,
}) => {
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
    </View>
  );
};

export default MuseumInfoTab;
