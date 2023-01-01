import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/themed";
import { useState } from "react";
import { fakeEventResponse, fakeMuseumResponse } from "../../../mock";
import { IEventResponse, IMuseumResponse } from "../../../types";
import EventCard from "../../elements/EventCard/EventCard";
import MuseumCard from "../../elements/MuseumCard/MuseumCard";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MuseumDetailScreen from "../MuseumDetailScreen/MuseumDetailScreen";
import EventDetailScreen from "../EventDetailScreen/EventDetailScreen";
import ConversationDetailScreen from "../ConversationDetailScreen/ConversationDetailScreen";
import TicketDetailScreen from "../TicketDetailScreen/TicketDetailScreen";

const results = Array.from(Array(10), () => {
  const random = Math.round(Math.random());
  if (random) return fakeEventResponse();
  return fakeMuseumResponse();
});

const Stack = createStackNavigator();

export default function SearchBrowseScreen() {
  const [searchString, setSearchString] = useState<string>("");
  const navigation = useNavigation<any>();
  return (
    <View style={{ backgroundColor: "#000000", minHeight: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
            maxHeight: 38,
            fontSize: 14,
            borderRadius: 20,
            marginHorizontal: 10,
            fontFamily: "Roboto_400Regular",
            backgroundColor: "#B5B5B5",
            color: "#000000",
          }}
          placeholder="Search..."
          onChangeText={(text) => setSearchString(text)}
          value={searchString}
          onSubmitEditing={(e) => {}}
        />
        <TouchableOpacity>
          <Icon
            name="upload"
            color="#0085FF"
            size={30}
            type="font-awesome"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 10 }}
      >
        {results.map((result: any) =>
          result?.eventId ? (
            <EventCard
              key={result.eventId}
              item={result}
              handlePress={() =>
                navigation.navigate("Search", {
                  screen: "EventDetail",
                  params: {
                    eventId: result.evenId,
                    navigationRoot: "Search",
                  },
                })
              }
            />
          ) : (
            <MuseumCard
              key={result.museumId}
              item={result}
              handlePress={() =>
                navigation.navigate("Search", {
                  screen: "MuseumDetail",
                  params: {
                    museumId: result.museumId,
                    navigationRoot: "Search",
                  },
                })
              }
            />
          )
        )}
      </ScrollView>
    </View>
  );
}

export const SearchScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,
        cardStyle: {
          backgroundColor: "#000000",
        },
      }}
    >
      <Stack.Screen
        name="SearchBrowse"
        component={SearchBrowseScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MuseumDetail"
        component={MuseumDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTintColor: "#0085FF",
          headerTitleStyle: {
            fontSize: 20,
          },
          title: "Museum",
          detachPreviousScreen: false,
        }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTintColor: "#0085FF",
          headerTitleStyle: {
            fontSize: 20,
          },
          title: "Museum",
          detachPreviousScreen: false,
        }}
      />
      <Stack.Screen
        name="ConversationDetail"
        component={ConversationDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTintColor: "#0085FF",
          headerTitleStyle: {
            fontSize: 20,
          },
          title: "Museum",
          detachPreviousScreen: false,
        }}
      />
      <Stack.Screen
        name="TicketDetail"
        component={TicketDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTintColor: "#0085FF",
          headerTitleStyle: {
            fontSize: 20,
          },
          title: "Search",
          detachPreviousScreen: false,
        }}
      />
    </Stack.Navigator>
  );
};
