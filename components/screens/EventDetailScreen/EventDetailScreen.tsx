import { View, Text } from "react-native";
import Card from "../../organisms/Card/Card";
import { Dimensions } from "react-native";
import { Icon } from "@rneui/themed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventInfoTab from "./EventInfoTab/EventInfoTab";
import EventUpdatesTab from "./EventUpdatesTab/EventUpdatesTab";
import EventReviewsTab from "./EventReviewsTab/EventReviewsTab";
import DetailTabNavigator from "../../elements/TabNavigator/DetailTabNavigator";
import CustomizedButton from "../../organisms/Button/Button";
import { formatNumber } from "../../../utils";
import { fakeEventResponse } from "../../../mock";

const Tab = createMaterialTopTabNavigator();

const item = fakeEventResponse();

export const EventDetailScreen = ({ route }) => {
  const { eventId } = route.params;
  return (
    <View
      style={{
        display: "flex",
        backgroundColor: "#000000",
        width: "100%",
        height: "100%",
        paddingHorizontal: "4%",
        paddingTop: "4%",
      }}
    >
      <Card>
        <Card.Image
          image={item.thumbnailUrl}
          style={{
            width: 145,
            height: 145,
          }}
        />
        <Card.Body>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "58%", // Hard coded value
              justifyContent: "space-between",
            }}
          >
            <View>
              <Card.Name>{item.name}</Card.Name>
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
            <Icon name="heart" type="ionicon" color="#B5B5B5" size={30} />
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
              {/* <Text
                style={{
                  fontFamily: "Roboto_700",
                  fontWeight: "700",
                  fontSize: 10,
                  color: "#B5B5B5",
                  marginVertical: 1,
                }}
              >
                5.0km
              </Text> */}
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
      <Tab.Navigator
        tabBar={(props) => <DetailTabNavigator {...props} />}
        initialLayout={{
          width: Dimensions.get("window").width,
        }}
        sceneContainerStyle={{
          backgroundColor: "#000000",
          position: "relative",
        }}
        style={{ backgroundColor: "#000000" }}
        screenOptions={{
          swipeEnabled: false,
          animationEnabled: false,
        }}
      >
        <Tab.Screen
          name="EventInfo"
          component={EventInfoTab}
          options={{ tabBarLabel: "Info" }}
        />
        <Tab.Screen
          name="EventUpdates"
          component={EventUpdatesTab}
          options={{ tabBarLabel: "Updates" }}
        />
        <Tab.Screen
          name="EventReviews"
          component={EventReviewsTab}
          options={{ tabBarLabel: "Reviews" }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default EventDetailScreen;
