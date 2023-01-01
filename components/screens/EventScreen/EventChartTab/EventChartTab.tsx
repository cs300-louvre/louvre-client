import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { EVENT_GENRES } from "../../../../const";
import { fakeEventResponse } from "../../../../mock";
import { IEventGenre, IEventResponse } from "../../../../types";
import BannerCarousel from "../../../elements/BannerCarousel/BannerCarousel";
import Carousel from "../../../elements/Carousel/Carousel";
import EventCard from "../../../elements/EventCard/EventCard";
import MiniCardCarousel from "../../../elements/MiniCardCarousel/MiniCardCarousel";

const eventChart: IEventResponse[] = Array.from(Array(30), () => {
  return fakeEventResponse();
});

export default function EventChartTab() {
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
            HOT EVENTS
          </Text>
          {eventChart.map((event) => (
            <EventCard
              key={event.eventId}
              item={event}
              handlePress={() =>
                navigation.navigate("Event", {
                  screen: "EventDetail",
                  params: {
                    eventId: event.eventId,
                    navigationRoot: "Event",
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
