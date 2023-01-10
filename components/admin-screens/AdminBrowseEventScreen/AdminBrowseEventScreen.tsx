import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import useGetEventByMuseumId from "../../../hooks/event/useGetEventByMuseumId";
import useMe from "../../../hooks/me/useMe";
import useGetMuseumByUserId from "../../../hooks/museum/useGetMuseumByUserId";
import { fakeEventResponse } from "../../../mock";
import { IEventResponse } from "../../../types";
import EventCard from "../../elements/EventCard/EventCard";
import MiniCardCarousel from "../../elements/MiniCardCarousel/MiniCardCarousel";
import CustomizedButton from "../../organisms/Button/Button";

export default function AdminBrowseEventScreen() {
  const [eventName, setEventName] = useState<string>("");
  const navigation = useNavigation<any>();
  const { data: me } = useMe();
  const { data: museum } = useGetMuseumByUserId(me.userId);
  const { data: browseEvents } = useGetEventByMuseumId(museum.museumId);

  if (!browseEvents) return null;

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 60,
        backgroundColor: "#000000",
        position: "relative",
      }}
    >
      <View
        style={{
          display: "flex",
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: "500",
            fontSize: 20,
            paddingVertical: 10,
          }}
        >
          Create New Event
        </Text>
        <TextInput
          style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 5,
            borderRadius: 10,
            maxHeight: 38,
            fontSize: 14,
            fontFamily: "Roboto_400Regular",
            color: "#000000",
            backgroundColor: "#B5B5B5",
          }}
          placeholder="Enter Event Name"
          onChangeText={(text) => setEventName(text)}
          value={eventName}
          onSubmitEditing={(e) => {}}
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              color: "#B5B5B5",
              fontFamily: "Roboto_400Regular",
              fontSize: 14,
            }}
          >{`${
            eventName ? 40 - eventName.length : 40
          } character(s) left`}</Text>
          <CustomizedButton
            title="Create"
            handlePress={() =>
              navigation.navigate("Event", {
                screen: "CreateEvent",
                params: {
                  eventName: eventName,
                  navigationRoot: "Event",
                },
              })
            }
          />
        </View>
      </View>
      {
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontWeight: "500",
                fontSize: 20,
              }}
            >
              My events
            </Text>
            <Text
              style={{
                color: "#0085FF",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              See all
            </Text>
          </View>
          {browseEvents.map((event) => (
            <EventCard
              key={event.eventId}
              item={event}
              handlePress={() =>
                navigation.navigate("Event", {
                  screen: "EventDetail",
                  params: {
                    itemData: event,
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
