//TODO rnfes = touche raccourcie pour generé le component de type const

import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const ButtonComponent = (props) => {
    return (
        <Pressable onPress={props.onPressHandler}>
            <View style={{...styles.btn, ...props.style}}>
                <Text style={styles.btnText}>{props.btnTitle}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "grey",
        padding: 9,
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontSize: 17,
    },
});

export default ButtonComponent;
