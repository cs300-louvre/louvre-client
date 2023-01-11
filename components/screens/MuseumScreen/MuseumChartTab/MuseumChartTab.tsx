import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import useGetMuseumChart from "../../../../hooks/browse/useGetMuseumChart";
import { fakeMuseumResponse } from "../../../../mock";
import { IMuseumResponse } from "../../../../types";
import EventCard from "../../../elements/EventCard/EventCard";
import MuseumCard from "../../../elements/MuseumCard/MuseumCard";

export default function EventChartTab() {
  const { data: museumChart } = useGetMuseumChart();
  const navigation = useNavigation<any>();
  return (
    <ScrollView
      style={{ paddingTop: 60 }}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      {
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "500",
            }}
          >
            HOT MUSEUMS
          </Text>
          {museumChart &&
            museumChart.map((museum) => (
              <MuseumCard
                key={museum.museumId}
                item={museum}
                handlePress={() =>
                  navigation.navigate("Museum", {
                    screen: "MuseumDetail",
                    params: {
                      museumId: museum.museumId,
                      navigationRoot: "Museum",
                    },
                  })
                }
              />
            ))}
        </View>
      }
    </ScrollView>
  );
}
