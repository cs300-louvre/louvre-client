import { fakeMessageResponse } from "../../../mock";
import { IMessageResponse } from "../../../types";
import {
  ScrollView,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import Message from "../../elements/Message/Message";
import { useRoute } from "@react-navigation/native";
import { useRef, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import { Icon } from "@rneui/themed";

const messages: IMessageResponse[] = Array.from(Array(10), () => {
  return fakeMessageResponse();
});

export const ConversationDetailScreen = () => {
  const route = useRoute<any>();
  const conversationRef = useRef<any>(null);
  const { userId } = route.params;
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const bottomTabBarHeight = useBottomTabBarHeight();
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    if (conversationRef) {
      conversationRef.current.scrollToEnd({ animation: true });
    }
  }, [conversationRef]);

  return (
    <KeyboardAvoidingView>
      <ScrollView scrollEnabled={false}>
        <View
          style={{
            height: windowHeight - headerHeight - bottomTabBarHeight - 75,
          }}
        >
          <ScrollView
            ref={conversationRef}
            contentContainerStyle={{
              paddingHorizontal: 10,
              paddingTop: 10,
            }}
          >
            {messages.map((message) => (
              <Message item={message} key={message.messageId} />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
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
            placeholder="Message..."
            multiline
          />
          <Icon
            name="paper-plane"
            color="#0085FF"
            size={30}
            type="font-awesome"
            style={{ marginRight: 10 }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConversationDetailScreen;
