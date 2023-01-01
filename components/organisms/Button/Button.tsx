import { Button } from "@rneui/themed";

export const CustomizedButton: React.FC<{
  title: string;
  backgroundColor?: string;
  color?: string;
  handlePress?: () => any;
}> = ({
  title,
  backgroundColor = "#0085FF",
  color = "#FFFFFF",
  handlePress = () => {},
}) => {
  return (
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
      }}
      titleStyle={{
        fontFamily: "Roboto_500Medium",
        fontSize: 14,
        color: color,
      }}
      onPress={handlePress}
    />
  );
};

export default CustomizedButton;
