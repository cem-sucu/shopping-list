import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <TitleText style={styles.logo}>Ma liste de course</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: Colors.danger,
        justifyContent: "center",
        alignItems: "center",
        minHeight: 30,
        paddingTop: 45,
        paddingBottom: 15,
    },
    logo: {
        color: Colors.white,
        fontSize: 30,
        padding: 2,
        fontWeight: "bold",
        fontFamily: "peralta",
    },
});

export default Header;
