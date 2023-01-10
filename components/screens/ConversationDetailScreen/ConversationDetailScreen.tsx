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
import { useRef, useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import { Icon } from "@rneui/themed";
import useGetMessagesByConversationId from "../../../hooks/chat/messages/useGetMessagesByChatId";
import { getConversationId } from "../../../utils";
import useMe from "../../../hooks/me/useMe";
import usePostMessage from "../../../hooks/chat/messages/usePostMessage";

export const ConversationDetailScreen = () => {
  const route = useRoute<any>();
  const conversationRef = useRef<any>(null);
  const { userId } = route.params;
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const bottomTabBarHeight = useBottomTabBarHeight();
  const headerHeight = useHeaderHeight();
  const { data: me } = useMe();
  const { data: messages } = useGetMessagesByConversationId(
    getConversationId([userId, me.userId])
  );
  const { mutateAsync } = usePostMessage();
  const [text, setText] = useState<string>("");

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
              minHeight: windowHeight - headerHeight - bottomTabBarHeight - 75,
              justifyContent: "flex-end",
            }}
          >
            {messages &&
              messages.map((message) => (
                <Message
                  item={message}
                  key={message.messageId}
                  isUserMessage={message.userId === me.userId}
                />
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
            onChangeText={(text) => setText(text)}
            value={text}
          />
          <TouchableOpacity
            onPress={() => {
              if (text) {
                mutateAsync({
                  content: text.trim(),
                  conversationId: getConversationId([userId, me.userId]),
                });
                setText("");
              }
            }}
          >
            <Icon
              name="paper-plane"
              color="#0085FF"
              size={30}
              type="font-awesome"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConversationDetailScreen;
