import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    headerOne: {
        color: colors.info,
        fontSize: 30,
        padding: 2,
        fontWeight: "bold",
        fontFamily: "peralta",
    },
    headerTwo: {
        color: colors.danger,
        fontSize: 25,
        padding: 9,
        fontWeight: "bold",
        fontFamily: "peralta",
        textAlign: "center",
    },
    textBody: {
        color: colors.bgproduct,
        fontSize: 19,
        textAlign: "center",
    },
});
