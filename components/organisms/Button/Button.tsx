import { Button } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";

export const CustomizedButton: React.FC<{
  title: string;
  backgroundColor?: string;
  color?: string;
  buttonStyles?: any;
  handlePress?: () => any;
}> = ({
  title,
  backgroundColor = "#0085FF",
  color = "#FFFFFF",
  handlePress = () => {},
  buttonStyles,
}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Button
        title={title}
        buttonStyle={{
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#0085FF",
          borderRadius: 30,
          backgroundColor: backgroundColor,
          width: 96,
          paddingVertical: 3,
          ...buttonStyles,
        }}
        titleStyle={{
          fontFamily: "Roboto_500Medium",
          fontSize: 14,
          color: color,
        }}
      />
    </TouchableOpacity>
  );
};

export default CustomizedButton;
