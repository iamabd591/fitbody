import { StyleSheet, Text, View } from "react-native";

type AuthHeaderProps = {
    heading: string,
}

export default function AuthHeader({ heading }: AuthHeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        color: "#E2F163",
        fontWeight: "700",
        fontSize: 30,
        paddingTop:10
    }
})