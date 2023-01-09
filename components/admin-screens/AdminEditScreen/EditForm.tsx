import { View, Text, TouchableHighlight, ImageBackground } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles, { StyledInput } from "./CustomStyles";
import { Button, Icon } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";
import { useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import useSignIn from "../../../hooks/user/useSignIn";

const genre = ["general", "natural", "science", "history", "art", "virtual"]

export default function EditForm({ museum }) {
    // TODO: Intergrate mutate async function from backend
    const tabBarHeight = useBottomTabBarHeight();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            thumbnailBase64: museum.thumbnailBase64,
            coverBase64: museum.coverBase64,
            description: "",
            location: "",
            genre: "",
            ticketPrice: 0,
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <View
                style={{
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
                                    paddingVertical: 8
                                }}>
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
                                onBlur={onBlur}
                                onChangeText={onChange}
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
                                    paddingVertical: 8
                                }}>
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
                                    paddingBottom: 20
                                }}>
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
                                }}>
                                <StyledInput
                                    placeholder="0"
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
                                }}>
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

                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                                onBlur={onBlur}
                                onChangeSearchInputText={() => { }}
                                buttonStyle={{ width: 120, padding: 0, backgroundColor: "#000000" }}
                                buttonTextStyle={{ color: "#ffffff" }}
                                dropdownStyle={{ backgroundColor: "#000000" }}
                                rowTextStyle={{ color: "#ffffff" }}
                                renderDropdownIcon={() => <Icon type="material" name="keyboard-arrow-up" color="#ffffff" />}
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
                    title={"Save Changes"}
                    titleStyle={{
                        fontFamily: "Roboto_700Bold",
                    }}
                />
            </View>
        </>
    );
}
