import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { fakeEventResponse } from "../../../../mock";
import { IEventGenre, IEventResponse } from "../../../../types";
import Carousel from "../../../elements/Carousel/Carousel";
import EventCard from "../../../elements/EventCard/EventCard";

const featuredEvents: IEventResponse[] = Array.from(Array(9), () => {
  return fakeEventResponse();
});

const browseEvents: IEventResponse[] = Array.from(Array(30), () => {
  return fakeEventResponse();
});

export default function EventTab() {
  const eventGenres: IEventGenre[] = browseEvents.reduce(
    (prev, val) =>
      prev.find((genre) => genre === val.genre) ? prev : [...prev, val.genre],
    []
  );

  return (
    <ScrollView
      style={{ paddingTop: 60 }}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <Carousel items={featuredEvents} />
      {eventGenres.map((genre) => {
        return (
          <View
            key={genre}
            style={{ paddingHorizontal: 20, paddingVertical: 10 }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontWeight: "500",
              }}
            >
              {genre.toUpperCase()}
            </Text>
            {browseEvents
              .filter((event) => event.genre === genre)
              .map((event) => (
                <EventCard key={event.eventId} item={event} />
              ))}
          </View>
        );
      })}
    </ScrollView>
  );
}
