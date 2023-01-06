import { View, Text, TouchableHighlight } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles, { StyledInput } from "./CustomStyles";
import { Button, Icon } from "@rneui/themed";
import { useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import useSignIn from "../../../hooks/user/useSignIn";
import useSignUp from "../../../hooks/user/useSignUp";

export default function RegisterForm({ setTab }) {
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync } = useSignUp();

  const tabBarHeight = useBottomTabBarHeight();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "user",
    },
  });

  const onSubmit = (data) => {
    console.debug(data);
    mutateAsync(data);
  };

  return (
    <>
      <View
        style={{
          width: "85%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              label="Name"
              placeholder="Enter your display name"
              leftIcon={{ type: "material", name: "person", color: "#0085FF" }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: true,
            pattern:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              label="Email"
              placeholder="Enter your email"
              leftIcon={{ type: "material", name: "email", color: "#0085FF" }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              label="Password"
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              leftIcon={{ type: "material", name: "lock", color: "#0085FF" }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              rightIcon={
                showPassword ? (
                  <Icon
                    type="material"
                    name="visibility"
                    size={24}
                    color="#6F6F6F"
                    onPress={() => setShowPassword(false)}
                  />
                ) : (
                  <Icon
                    type="material"
                    name="visibility-off"
                    size={24}
                    color="#6F6F6F"
                    onPress={() => setShowPassword(true)}
                  />
                )
              }
            />
          )}
          name="password"
        />
        <Button
          TouchableComponent={TouchableHighlight}
          onPress={handleSubmit(onSubmit)}
          containerStyle={styles.buttonContainer}
          buttonStyle={{ backgroundColor: "#0085FF" }}
          title={"Sign up"}
          titleStyle={{
            fontFamily: "Roboto_700Bold",
          }}
        />
      </View>
      <View
        style={{
          width: "85%",
          position: "absolute",
          bottom: tabBarHeight + 60,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ width: "40%", height: 1, backgroundColor: "#FFFFFF" }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              marginBottom: 10,
              fontFamily: "Roboto_400Regular",
              fontSize: 16,
            }}
          >
            Or
          </Text>
          <View
            style={{ width: "40%", height: 1, backgroundColor: "#FFFFFF" }}
          />
        </View>
        <Button
          TouchableComponent={TouchableHighlight}
          onPress={() => setTab("login")}
          containerStyle={styles.buttonContainer}
          buttonStyle={{ backgroundColor: "#FFFFFF" }}
          title={"Login"}
          titleStyle={{
            color: "#0085FF",
            fontFamily: "Roboto_500Medium",
          }}
        />
      </View>
    </>
  );
}
