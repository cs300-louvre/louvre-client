import { StyleSheet } from "react-native";
import { Input } from "@rneui/themed";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: 130,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#FFFFFF",
  },
  registerButton: {
    backgroundColor: "#000000",
  },
  buttonLabel: {
    fontFamily: "Fraunces_600Regular",
  },
  blackText: {
    color: "#000000",
  },
  whiteText: {
    color: "#FFFFFF",
  },
  buttonContainer: {
    borderRadius: 30,
    width: 200,
    height: 40,
  },
});

export default styles;

export const StyledInput = (props) => {
  return (
    <Input
      ViewComponent={(props) => {
        return (
          <TouchableOpacity>
            {props.children}
          </TouchableOpacity>
        );
      }}
      labelStyle={{
        color: "#FFFFFF",
        marginBottom: 10,
        fontFamily: "Roboto_400Regular",
      }}
      inputContainerStyle={{
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        borderBottomWidth: 0,
        paddingHorizontal: 10,
      }}
      inputStyle={{
        fontFamily: "Roboto_400Regular",
        fontSize: 16,
        color: "#000000",
      }}
      leftIconContainerStyle={{
        marginRight: 5,
      }}
      {...props}
    />
  );
}