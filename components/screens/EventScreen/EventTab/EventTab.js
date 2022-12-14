import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import Carousel from "../../../elements/Carousel/Carousel";
import EventCard from "../../../elements/EventCard/EventCard";

const data = [
  {
    coverImage:
      "https://images.adsttc.com/media/images/627e/dec9/3e4b/318f/a100/0024/slideshow/courtesy_of_studio_malka_architecture.jpg?1652481733",
  },
  {
    coverImage:
      "https://nhm.org/sites/default/files/styles/link_tile_slider/public/2022-04/7_trex.jpg?h=c6980913",
  },
  {
    coverImage:
      "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/museum.jpg",
  },
  {
    coverImage:
      "https://images.adsttc.com/media/images/627e/dec9/3e4b/318f/a100/0024/slideshow/courtesy_of_studio_malka_architecture.jpg?1652481733",
  },
  {
    coverImage:
      "https://nhm.org/sites/default/files/styles/link_tile_slider/public/2022-04/7_trex.jpg?h=c6980913",
  },
  {
    coverImage:
      "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/museum.jpg",
  },
];

const cardMockData = [
  {
    title: "Rock in Rio",
    fromDate: "28th Oct 2022",
    toDate: "28th Nov 2022",
    rating: 4,
    numReviews: 241,
    price: 70000,
    ticketSold: 1983,
    lat: "",
    lng: "",
    coverImage:
      "https://images.adsttc.com/media/images/627e/dec9/3e4b/318f/a100/0024/slideshow/courtesy_of_studio_malka_architecture.jpg?1652481733"
  },
  {
    title: "Rock in Rio",
    fromDate: "28th Oct 2022",
    toDate: "28th Nov 2022",
    rating: 4,
    numReviews: 241,
    price: 70000,
    ticketSold: 1983,
    lat: "",
    lng: "",
    coverImage:
      "https://nhm.org/sites/default/files/styles/link_tile_slider/public/2022-04/7_trex.jpg?h=c6980913",
  },
  {
    title: "Rock in Rio",
    fromDate: "28th Oct 2022",
    toDate: "28th Nov 2022",
    rating: 4,
    numReviews: 241,
    price: 70000,
    ticketSold: 1983,
    lat: "",
    lng: "",
    coverImage:
      "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/museum.jpg",
  },
  {
    title: "Rock in Rio",
    fromDate: "28th Oct 2022",
    toDate: "28th Nov 2022",
    rating: 4,
    numReviews: 241,
    price: 70000,
    ticketSold: 1983,
    lat: "",
    lng: "",
    coverImage:
      "https://images.adsttc.com/media/images/627e/dec9/3e4b/318f/a100/0024/slideshow/courtesy_of_studio_malka_architecture.jpg?1652481733",
  },
]
export default function EventTab() {
  return (
    <ScrollView
      style={{ paddingTop: 60 }}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <Carousel items={data} />
      <Text style={{ color: "#FF0000" }}>Start Event</Text>
      {cardMockData.map((item, index) => {
        return (
          <EventCard key={index} item={item} />
        )
      })}
      <Text style={{ color: "#FF0000" }}>End Event</Text>
    </ScrollView>
  );
}
