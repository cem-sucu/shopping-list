import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import TitleText from "./TitleText";
import AppStyles from "../constants/AppStyles";

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <TitleText style={AppStyles.headerOne}>Ma liste de course</TitleText>
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
});

export default Header;
