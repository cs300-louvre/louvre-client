import { Button } from '@rneui/themed';

export default function CustomizedButton({ title, backgroundColor = "#0085FF", color = "#FFFFFF" }) {
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
        />
    );
}