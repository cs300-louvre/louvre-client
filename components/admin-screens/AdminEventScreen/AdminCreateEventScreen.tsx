import {
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles, { StyledInput } from "../AdminEditScreen/CustomStyles";
import { Button, Icon } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ImageInfo, ImagePickerCancelledResult } from "expo-image-picker";
import * as ImagePicker from "expo-image-picker";
import { TextInputMask } from "react-native-masked-text";
import { coverUrlDefault, thumbnailUrlDefault } from "../../../types";
import usePostEvent from "../../../hooks/event/usePostEvent";
import { useNavigation } from "@react-navigation/native";

const genre = [
  "art",
  "education",
  "sport",
  "festival",
  "virtual",
  "volunteer",
  "corporate",
];

export default function CreateEventForm() {
  const route = useRoute<any>();
  const { eventName, navigationRoot } = route.params;
  // TODO: Intergrate mutate async function from backend
  const tabBarHeight = useBottomTabBarHeight();
  const [coverImage, setCoverImage] = useState(null);
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [date, setDate] = useState(new Date());

  const pickThumbnailImage = async () => {
    // No permissions request is necessary for launching the image library
    const result: ImagePickerCancelledResult | ImageInfo =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        base64: true,
        aspect: [4, 3],
        quality: 1,
      });

    if (!result.cancelled) {
      setThumbnailImage(result.uri);
      setValue("thumbnailBase64", `data:image/png;base64,${result.base64}`);
    }
  };

  const pickCoverImage = async () => {
    // No permissions request is necessary for launching the image library
    const result: ImagePickerCancelledResult | ImageInfo =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        base64: true,
        aspect: [4, 3],
        quality: 1,
      });

    if (!result.cancelled) {
      setCoverImage(result.uri);
      setValue("coverBase64", `data:image/png;base64,${result.base64}`);
    }
  };

  const setStartTimeInForm = (date) => {
    setValue("startTime", date);
  };

  const setEndTimeInForm = (date) => {
    setValue("endTime", date);
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: eventName,
      thumbnailBase64: "",
      coverBase64: "",
      description: "",
      location: "",
      genre: "",
      ticketPrice: 0,
      startTime: "",
      endTime: "",
    },
  });

  const { mutateAsync } = usePostEvent();
  const navigation = useNavigation();

  const onSubmit = (data) => {
    // TODO: add backend
    mutateAsync(data);
    navigation.goBack();
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 60,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: "500",
            fontSize: 24,
            paddingVertical: 10,
            paddingBottom: 22,
            paddingHorizontal: 10,
          }}
        >
          {eventName}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          <ImageBackground
            source={{
              uri:
                thumbnailImage == null ? thumbnailUrlDefault : thumbnailImage,
            }}
            resizeMode="cover"
            style={{ width: 117, height: 117 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "flex-end",
                alignItems: "center",
                height: "25%",
              }}
              onPress={pickThumbnailImage}
            >
              <Text
                style={{ color: "#ffffff", fontWeight: "600", fontSize: 18 }}
              >
                Edit
              </Text>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground
            source={{ uri: coverImage == null ? coverUrlDefault : coverImage }}
            resizeMode="cover"
            style={{ width: 218, height: 117 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "flex-end",
                alignItems: "center",
                height: "25%",
              }}
              onPress={pickCoverImage}
            >
              <Text
                style={{ color: "#ffffff", fontWeight: "600", fontSize: 18 }}
              >
                Edit Event Banner
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View
              style={{
                width: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  alignItems: "center",
                  paddingVertical: 8,
                }}
              >
                <Icon type="material" name="chat" color="#B5B5B5" />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "500",
                    fontSize: 20,
                    paddingLeft: 8,
                  }}
                >
                  Description
                </Text>
              </View>
              <StyledInput
                placeholder="Brief introduction..."
                defaultValues={value}
                onBlur={onBlur}
                onChangeText={onChange}
                multiline={true}
                value={value}
                maxHeight={90}
                height={90}
                textAlignVertical="top"
                paddingHorizontal={10}
                paddingVertical={10}
              />
            </View>
          )}
          name="description"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View
              style={{
                width: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  alignItems: "center",
                  paddingVertical: 8,
                }}
              >
                <Icon type="material" name="place" color="#B5B5B5" />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "500",
                    fontSize: 20,
                    paddingLeft: 8,
                  }}
                >
                  Location
                </Text>
              </View>
              <StyledInput
                placeholder="Address where the event will take place..."
                defaultValues={value}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxHeight={44}
                height={44}
                textAlignVertical="top"
                paddingHorizontal={10}
                paddingVertical={10}
              />
            </View>
          )}
          name="location"
        />

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon type="material" name="place" color="#B5B5B5" />
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontWeight: "500",
                      fontSize: 20,
                      paddingLeft: 8,
                    }}
                  >
                    Start time
                  </Text>
                </View>
                <View
                  style={{
                    width: 180,
                  }}
                >
                  <StyledInput
                    placeholder="Start time..."
                    defaultValues={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    maxHeight={24}
                    height={24}
                    textAlignVertical="top"
                    paddingHorizontal={2}
                    paddingVertical={10}
                  />
                </View>
              </View>
            )}
            name="startTime"
          />
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontWeight: "500",
                        fontSize: 20,
                        paddingLeft: 8,
                      }}
                    >
                      End time
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 180,
                    }}
                  >
                    <StyledInput
                      placeholder="End time..."
                      defaultValues={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      maxHeight={24}
                      height={24}
                      textAlignVertical="top"
                      paddingHorizontal={2}
                      paddingVertical={10}
                    />
                  </View>
                </View>
              )}
              name="endTime"
            />
          </View>
        </View>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 20,
                }}
              >
                <Icon type="material" name="chat" color="#B5B5B5" />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "500",
                    fontSize: 20,
                    paddingLeft: 8,
                  }}
                >
                  Price
                </Text>
              </View>
              <View
                style={{
                  width: 100,
                }}
              >
                <StyledInput
                  placeholder="0"
                  defaultValues={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  maxHeight={24}
                  height={24}
                  textAlignVertical="top"
                  paddingHorizontal={10}
                  paddingVertical={10}
                />
              </View>
            </View>
          )}
          name="ticketPrice"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  // height: "100%",
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                <Icon type="material" name="chat" color="#B5B5B5" />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "500",
                    fontSize: 20,
                    paddingLeft: 8,
                  }}
                >
                  Genre
                </Text>
              </View>
              <SelectDropdown
                data={genre}
                onSelect={onChange}
                defaultButtonText={value}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                onBlur={onBlur}
                onChangeSearchInputText={() => {}}
                buttonStyle={{
                  width: 120,
                  padding: 0,
                  backgroundColor: "#000000",
                }}
                buttonTextStyle={{ color: "#ffffff" }}
                dropdownStyle={{ backgroundColor: "#000000" }}
                rowTextStyle={{ color: "#ffffff" }}
                renderDropdownIcon={() => (
                  <Icon
                    type="material"
                    name="keyboard-arrow-up"
                    color="#ffffff"
                  />
                )}
                dropdownIconPosition={"right"}
              />
            </View>
          )}
          name="genre"
        />

        <Button
          onPress={handleSubmit(onSubmit)}
          containerStyle={styles.buttonContainer}
          buttonStyle={{ backgroundColor: "#0085FF" }}
          title={"Create Events"}
          titleStyle={{
            fontFamily: "Roboto_700Bold",
          }}
        />
      </ScrollView>
    </>
  );
}
