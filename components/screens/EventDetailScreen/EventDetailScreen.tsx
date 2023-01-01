import { View, Text } from "react-native";
import Card from "../../organisms/Card/Card";
import { Dimensions } from "react-native";
import { Icon } from "@rneui/themed";
import { useState } from "react";
import EventInfoTab from "./EventInfoTab/EventInfoTab";
import EventUpdatesTab from "./EventUpdatesTab/EventUpdatesTab";
import EventReviewsTab from "./EventReviewsTab/EventReviewsTab";
import DetailTabNavigator from "../../elements/TabNavigator/DetailTabNavigator";
import CustomizedButton from "../../organisms/Button/Button";
import { formatNumber } from "../../../utils";
import { fakeEventResponse } from "../../../mock";
import { ScrollView } from "react-native-gesture-handler";
import TabNavigator from "../../elements/TabNavigator/TabNavigator";

const item = fakeEventResponse();

export const EventDetailScreen = ({ route }) => {
  const [tab, setTab] = useState<number>(0);
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  const tabNavigationObjects = [
    { label: "Info", onPress: () => setTab(0) },
    { label: "Updates", onPress: () => setTab(1) },
    { label: "Reviews", onPress: () => setTab(2) },
  ];
  const { eventId, navigationRoot } = route.params;
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingBottom: 60,
        paddingHorizontal: 20,
      }}
    >
      <Card>
        <Card.Image
          image={item.thumbnailUrl}
          style={{
            width: 145,
            height: 145,
            borderRadius: 5,
          }}
        />
        <Card.Body>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: windowWidth - 145 - 40, // Hard coded value
              justifyContent: "space-between",
            }}
          >
            <View>
              <Card.Name numberOfLine={2} containerStyle={{ width: "70%" }}>
                {item.name}
              </Card.Name>
              <Text
                numberOfLines={2}
                style={{
                  fontFamily: "Roboto_700",
                  fontSize: 12,
                  color: "#B5B5B5",
                }}
              >
                by {item.museumName}
              </Text>
            </View>
            <Icon
              name="heart"
              type="ionicon"
              color={item.isFollowedByUser ? "#FF3333" : "#B5B5B5"}
              size={30}
            />
          </View>
          <Card.Rating
            rating={item.rating}
            numReviews={item.numOfReviews}
            size={15}
          />
          <View
            style={{
              display: "flex",
              paddingTop: 35, // Hard coded value to align with the bottom of the card, need to change later
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "58%", // Hard coded value
              }}
            >
              <CustomizedButton
                title={"Message"}
                backgroundColor={"#000000"}
                color={"#0085FF"}
              />
              <CustomizedButton title={`${formatNumber(item.ticketPrice)}đ`} />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "58%", // Hard coded value
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto_700",
                  fontWeight: "700",
                  fontSize: 10,
                  color: "#B5B5B5",
                  marginVertical: 1,
                }}
              >
                {item.genre.toUpperCase()}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "Roboto_700",
                  fontWeight: "700",
                  fontSize: 10,
                  color: "#B5B5B5",
                  marginVertical: 1,
                }}
              >
                {item.sales} TICKETS SOLD
              </Text>
            </View>
          </View>
        </Card.Body>
      </Card>
      <View style={{ alignItems: "center" }}>
        <TabNavigator
          items={tabNavigationObjects}
          activeIndex={tab}
          containerStyle={{ marginTop: 20 }}
        />
      </View>
      {tab === 0 ? (
        <EventInfoTab item={item} navigationRoot={navigationRoot} />
      ) : null}
      {tab === 1 ? <EventUpdatesTab eventId={eventId} /> : null}
      {tab === 2 ? <EventReviewsTab eventId={eventId} /> : null}
    </ScrollView>
  );
};

export default EventDetailScreen;
