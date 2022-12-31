import React from "react";
import { View, Text, ScrollView } from "react-native";
import { EVENT_GENRES } from "../../../../const";
import { fakeEventResponse } from "../../../../mock";
import { IEventGenre, IEventResponse } from "../../../../types";
import BannerCarousel from "../../../elements/BannerCarousel/BannerCarousel";
import Carousel from "../../../elements/Carousel/Carousel";
import EventCard from "../../../elements/EventCard/EventCard";
import MiniCardCarousel from "../../../elements/MiniCardCarousel/MiniCardCarousel";

const featuredEvents: IEventResponse[] = Array.from(Array(9), () => {
  return fakeEventResponse();
});

const browseEvents: IEventResponse[] = Array.from(Array(30), () => {
  return fakeEventResponse();
});

const bannerTexts = [
  "Discover\nnew events",
  "100+ events",
  "Book tickets\nin a second",
];

export default function EventTab() {
  const eventGenres: IEventGenre[] = browseEvents
    .reduce(
      (prev, val) =>
        prev.find((genre) => genre.name === val.genre)
          ? prev
          : [
              ...prev,
              {
                name: val.genre,
                order: EVENT_GENRES.findIndex((v) => v === val.genre),
              },
            ],
      []
    )
    .sort((a, b) => a.order - b.order)
    .map((e) => e.name);
  const newEvents: IEventResponse[] = browseEvents
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 3);

  return (
    <ScrollView
      style={{ paddingTop: 60 }}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <Carousel items={featuredEvents} />
      {
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "500",
            }}
          >
            NEW EVENTS
          </Text>
          {newEvents.map((event) => (
            <EventCard key={event.eventId} item={event} />
          ))}
        </View>
      }
      <BannerCarousel bannerTexts={bannerTexts} />
      {
        <View style={{ paddingTop: 10 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "500",
              paddingHorizontal: 20,
              marginBottom: 10,
            }}
          >
            EXPLORE
          </Text>
          {
            <MiniCardCarousel
              type="event"
              items={browseEvents
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
                .slice(0, 9)}
            />
          }
        </View>
      }
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
