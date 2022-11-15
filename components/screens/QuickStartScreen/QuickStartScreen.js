import { View, Image, Text, Dimensions, FlatList } from "react-native";
import { useState, useRef, useCallback, useMemo } from "react";
import { Button } from "@rneui/themed";
import styles from "./CustomStyles";
import useQuickStart from "../../../hooks/useQuickStart";

const switchTextComponents = (id) => {
  switch (id) {
    case 0:
      return (
        <View
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            top: 70,
          }}
        >
          <Text
            style={[
              styles.text,
              {
                fontSize: 40,
                color: "#FFFFFF",
              },
            ]}
          >
            Louvre
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 16,
                color: "#FFFFFF",
                textAlign: "center",
              },
            ]}
          >
            We bring art to the masses
          </Text>
        </View>
      );
    case 1:
      return (
        <>
          <View
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bottom: 250,
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  fontSize: 40,
                  color: "#FFFFFF",
                },
              ]}
            >
              Explore
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 24,
                  color: "#FFFFFF",
                },
              ]}
            >
              favourite local museums
            </Text>
          </View>
        </>
      );
    case 2:
      return (
        <>
          <View
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              top: 70,
              paddingLeft: 30,
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  fontSize: 35,
                  color: "#FFFFFF",
                },
              ]}
            >
              Ticket Booking
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 24,
                  color: "#FFFFFF",
                },
              ]}
            >
              made easy
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              bottom: 250,
              paddingRight: 30,
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  fontSize: 24,
                  color: "#FFFFFF",
                  textAlign: "right",
                },
              ]}
            >
              modern solution for
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 35,
                  color: "#FFFFFF",
                  textAlign: "right",
                },
              ]}
            >
              Event Management
            </Text>
          </View>
        </>
      );
    case 3:
      return (
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bottom: 70,
          }}
        >
          <Text
            style={[
              styles.text,
              {
                fontSize: 40,
                color: "#FFFFFF",
              },
            ]}
          >
            Let's go
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 16,
                color: "#FFFFFF",
                marginHorizontal: 20,
                textAlign: "center",
              },
            ]}
          >
            Before embarking on this journey together,{"\n"}we want to thank you
            for trusting us.{"\n"}You're going to be amazed.
          </Text>
        </View>
      );
    default:
      return null;
  }
}

export default function QuickStartScreen() {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const slideList = useMemo(() => [
    { image: require("../../../assets/slide-1.png"), id: 0, textComponents: switchTextComponents(0) },
    { image: require("../../../assets/slide-2.png"), id: 1, textComponents: switchTextComponents(1) },
    { image: require("../../../assets/slide-3.png"), id: 2, textComponents: switchTextComponents(2) },
    { image: require("../../../assets/slide-4.png"), id: 3, textComponents: switchTextComponents(3) },
  ], []);

  const { finishQuickStart } = useQuickStart();
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  const listRef = useRef(null);
  indexRef.current = index;

  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    const distance = Math.abs(roundIndex - index);
    const isNoMansLand = 0.4 < distance;
    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(e => e.id, []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  const Slide = ({ data }) => {
    return (
      <View
        style={{
          height: windowHeight,
          width: windowWidth,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={data.image}
          style={{ width: windowWidth, height: windowHeight }}
        />
        {data.textComponents}
      </View>
    );
  }

  const Pagination = ({ index }) => {
    return (
      <View style={styles.pagination}>
        {slideList.map((_, i) => {
          return (
            <View
              key={i}
              style={[
                styles.paginationDot,
                index === i
                  ? styles.paginationDotActive
                  : styles.paginationDotInactive,
              ]}
            />
          );
        })}
      </View>
    );
  }

  const handleClick = (index, setIndex) => {
    const isLastSlide = index == slideList.length - 1;
    if (isLastSlide) finishQuickStart();
    else if (listRef.current) {
      listRef.current.scrollToIndex({ index: index + 1 });
    }
  }

  const NextSlideButton = ({ index, setIndex }) => {
    const isLastSlide = index == slideList.length - 1;
    return (
      <Button
        onPress={() => handleClick(index, setIndex)}
        containerStyle={[styles.buttonContainer]}
        buttonStyle={[
          styles.button,
          isLastSlide ? styles.buttonLastSlide : styles.buttonNotLastSlide,
        ]}
        title={isLastSlide ? "Getting Started" : "Continue"}
        titleStyle={[
          styles.text,
          isLastSlide ? styles.buttonTitleLastSlide : styles.buttonTitleNotLastSlide]}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        ref={listRef}
        data={slideList}
        style={{ flex: 1 }}
        renderItem={({ item }) => {
          return <Slide data={item} key={item.image} />;
        }}
        pagingEnabled
        horizontal
        keyExtractor={({ item }) => item.image}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <NextSlideButton index={index} setIndex={setIndex} />
      <Pagination index={index} />
    </View>
  );
}
