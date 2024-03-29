import { View, TouchableHighlight } from "react-native";
import { Button } from "@rneui/themed";
import { useEffect, useState, useRef } from "react";

export default function TabNavigator({
  items,
  activeIndex = 0,
  containerStyle = {},
}) {
  return (
    <View
      style={[
        {
          width: items.length * 85,
          padding: 2,
          borderRadius: 5,
          backgroundColor: "#636363",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
        containerStyle,
      ]}
    >
      {items.map(({ label, onPress }, index) => (
        <Button
          key={label}
          TouchableComponent={({ children, ...props }) => (
            <TouchableHighlight
              {...props}
              underlayColor="rgba(255, 255, 255, 0.1)"
              style={{ borderRadius: 5 }}
            >
              {children}
            </TouchableHighlight>
          )}
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
            transform: [{ translateY: 1 }],
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
