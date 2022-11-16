import { View, Animated } from "react-native";
import { Button } from "@rneui/themed";
import { useEffect, useState, useRef } from "react";

export default function TabNavigator({ containerStyle, items, activeIndex }) {
  return (
    <View
      style={[
        {
          width: items.length * 80,
          padding: 2,
          borderRadius: 5,
          backgroundColor: "#636363",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        },
        containerStyle,
      ]}
    >
      {items.map(({ label, onPress }, index) => (
        <Button
          key={label}
          onPress={onPress}
          containerStyle={{
            width: `${98 / items.length}%`,
          }}
          buttonStyle={{
            borderRadius: 5,
            paddingVertical: 2,
            backgroundColor:
              index == activeIndex
                ? "rgba(181, 181, 181, 1)"
                : "rgba(181, 181, 181, 0)",
          }}
          title={label}
          titleStyle={{
            fontFamily: "Roboto_500Medium",
            fontSize: 14,
          }}
        />
      ))}
    </View>
  );
}
