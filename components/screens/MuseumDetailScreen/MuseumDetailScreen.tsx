import { View, Text } from "react-native";
import Card from "../../organisms/Card/Card";
import { Dimensions } from "react-native";
import { Icon } from "@rneui/themed";
import { useState } from "react";
import DetailTabNavigator from "../../elements/TabNavigator/DetailTabNavigator";
import CustomizedButton from "../../organisms/Button/Button";
import { formatNumber } from "../../../utils";
import { fakeEventResponse, fakeMuseumResponse } from "../../../mock";
import { ScrollView } from "react-native-gesture-handler";
import TabNavigator from "../../elements/TabNavigator/TabNavigator";
import MuseumInfoTab from "./MuseumInfoTab/MuseumInfoTab";
import MuseumUpdatesTab from "./MuseumUpdatesTab/MuseumUpdatesTab";
import MuseumReviewsTab from "./MuseumReviewsTab/MuseumReviewsTab";
import {
  NavigationContainerRefContext,
  useNavigation,
} from "@react-navigation/native";

const item = fakeMuseumResponse();

export const MuseumDetailScreen = ({ route }) => {
  const [tab, setTab] = useState<number>(0);
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const navigation = useNavigation<any>();
  const tabNavigationObjects = [
    { label: "Info", onPress: () => setTab(0) },
    { label: "Updates", onPress: () => setTab(1) },
    { label: "Reviews", onPress: () => setTab(2) },
  ];
  const { eventId, navigationRoot } = route.params;
  const ticketId = "aji8y93218";
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
        <Card.Body
          containerStyle={{ minHeight: 145, justifyContent: "space-between" }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: windowWidth - 145 - 40, // Hard coded value
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Card.Name numberOfLine={2} containerStyle={{ width: "80%" }}>
                {item.name}
              </Card.Name>
              <Icon
                name="heart"
                type="ionicon"
                color={item.isFollowedByUser ? "#FF3333" : "#B5B5B5"}
                size={30}
              />
            </View>
            <Text
              numberOfLines={2}
              style={{
                fontFamily: "Roboto_700",
                fontSize: 12,
                color: "#B5B5B5",
              }}
            >
              {item.location}
            </Text>
          </View>
          <Card.Rating
            rating={item.rating}
            numReviews={item.numOfReviews}
            size={15}
          />
          <View
            style={{
              display: "flex",
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
                handlePress={() =>
                  navigation.navigate(navigationRoot, {
                    screen: "ConversationDetail",
                    params: {
                      userId: item.userId,
                      navigationRoot: navigationRoot,
                    },
                  })
                }
              />
              <CustomizedButton
                title={`${formatNumber(item.ticketPrice)}đ`}
                handlePress={() =>
                  navigation.navigate(navigationRoot, {
                    screen: "TicketDetail",
                    params: {
                      ticketId: ticketId,
                      navigationRoot: navigationRoot,
                    },
                  })
                }
              />
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
        <MuseumInfoTab item={item} navigationRoot={navigationRoot} />
      ) : null}
      {tab === 1 ? <MuseumUpdatesTab museumId={eventId} /> : null}
      {tab === 2 ? <MuseumReviewsTab museumId={eventId} /> : null}
    </ScrollView>
  );
};

export default MuseumDetailScreen;
