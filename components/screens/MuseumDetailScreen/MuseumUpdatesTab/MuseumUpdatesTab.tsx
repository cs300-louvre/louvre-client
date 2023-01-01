import { Dimensions } from "react-native";
import { View, Text, Image } from "react-native";
import { fakeMuseumResponse, fakePost } from "../../../../mock";
import { IEventResponse, IPostResponse } from "../../../../types";
import MuseumCard from "../../../elements/MuseumCard/MuseumCard";

const posts: IPostResponse[] = Array.from(Array(3), () => {
  return fakePost();
});

export const MuseumUpdatesTab: React.FC<{ museumId: string }> = ({
  museumId,
}) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

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
            fontFamily: "Roboto_700Bold",
            fontSize: 18,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Roboto_400Regular",
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
      {posts.map((post) => (
        <Post item={post} key={post.postId} />
      ))}
    </View>
  );
};

export default MuseumUpdatesTab;