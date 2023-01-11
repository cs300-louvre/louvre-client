import { Dimensions } from "react-native";
import { View, Text, Image } from "react-native";
import useGetPostsByEomId from "../../../../hooks/post/useGetPostsByEomId";
import { fakeMuseumResponse, fakePost } from "../../../../mock";
import { IEventResponse, IPostResponse } from "../../../../types";
import MuseumCard from "../../../elements/MuseumCard/MuseumCard";

export const EventUpdatesTab: React.FC<{ eventId: string }> = ({ eventId }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const { data: posts } = useGetPostsByEomId(eventId);

  const Post: React.FC<{ item: IPostResponse }> = ({ item }) => {
    return (
      <View style={{ marginBottom: 40 }}>
        <Text
          style={{
            color: "#B5B5B5",
            fontFamily: "Roboto_400Regular",
          }}
        >
          {item.createdAt}
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Roboto_400Regular",
            fontSize: 20,
          }}
        >
          {item.body}
        </Text>
        <Image
          style={{
            width: windowWidth - 40,
            height: windowWidth - 40,
            borderRadius: 10,
            marginTop: 10,
          }}
          resizeMode="cover"
          source={{ uri: item.imageUrl }}
        />
      </View>
    );
  };
  return (
    <View style={{ marginTop: 10 }}>
      {posts &&
        posts
          .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
          .reverse()
          .map((post) => <Post item={post} key={post.postId} />)}
    </View>
  );
};

export default EventUpdatesTab;
