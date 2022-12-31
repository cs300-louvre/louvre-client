import React from "react";
import { View, Text, ScrollView } from "react-native";
import { fakeMuseumResponse } from "../../../../mock";
import { IMuseumResponse } from "../../../../types";
import EventCard from "../../../elements/EventCard/EventCard";
import MuseumCard from "../../../elements/MuseumCard/MuseumCard";

const museumChart: IMuseumResponse[] = Array.from(Array(30), () => {
  return fakeMuseumResponse();
});

export default function EventChartTab() {
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
          {museumChart.map((museum) => (
            <MuseumCard key={museum.museumId} item={museum} />
          ))}
        </View>
      }
    </ScrollView>
  );
}
