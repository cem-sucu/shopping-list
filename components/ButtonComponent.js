//TODO rnfes = touche raccourcie pour generé le component de type const

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ButtonComponent = ({ onPressHandler, style, children }) => {
    return (
        <TouchableOpacity onPress={onPressHandler} activeOpacity={0.6}>
            <View style={{ ...styles.btn, ...style }}>
                <Text style={styles.btnText}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#808080",
        padding: 9,
    },
    btnText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 17,
    },
});

export default ButtonComponent;
