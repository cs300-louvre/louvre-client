import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { EVENT_GENRES } from "../../../../const";
import useGetFeaturedEvents from "../../../../hooks/browse/useGetFeaturedEvents";
import useGetMuseums from "../../../../hooks/browse/useGetMuseums";
import { fakeEventResponse, fakeMuseumResponse } from "../../../../mock";
import {
  IEventGenre,
  IEventResponse,
  IMuseumResponse,
} from "../../../../types";
import BannerCarousel from "../../../elements/BannerCarousel/BannerCarousel";
import Carousel from "../../../elements/Carousel/Carousel";
import MiniCardCarousel from "../../../elements/MiniCardCarousel/MiniCardCarousel";
import MuseumCard from "../../../elements/MuseumCard/MuseumCard";

const bannerTexts = [
  "Discover\nnew events",
  "100+ events",
  "Book tickets\nin a second",
];

export default function MuseumTab() {
  const { data: browseMuseums } = useGetMuseums();
  const { data: featuredEvents } = useGetFeaturedEvents();
  const navigation = useNavigation<any>();

  if (!browseMuseums || !featuredEvents) return null;

  if (!browseMuseums) return null;

  const museumGenres: IEventGenre[] = browseMuseums
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
  const newMuseums: IMuseumResponse[] = browseMuseums
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 3);

  const handlePressFactory = (itemId) => () =>
    navigation.navigate("Museum", {
      screen: "EventDetail",
      params: {
        eventId: itemId,
        navigationRoot: "Museum",
      },
    });
  return (
    <ScrollView
      style={{ paddingTop: 60 }}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <Carousel
        items={featuredEvents}
        handlePressFactory={handlePressFactory}
      />
      {
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "500",
            }}
          >
            NEW MUSEUMS
          </Text>
          {newMuseums.map((museum) => (
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
              items={browseMuseums
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
                .slice(0, 9)}
              handlePressFactory={(item) => () =>
                navigation.navigate("Museum", {
                  screen: "MuseumDetail",
                  params: {
                    museumId: item.museumId,
                    navigationRoot: "Museum",
                  },
                })}
            />
          }
        </View>
      }
      {museumGenres.map((genre) => {
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
            {browseMuseums
              .filter((museum) => museum.genre === genre)
              .map((museum) => (
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
        );
      })}
    </ScrollView>
  );
}
