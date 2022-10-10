//TODO rnfes = touche raccourcie pour generé le component de type const

import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../constants/colors";

const Input = (props) => {
    return (
        <TextInput
            {...props}
            style={{ ...styles.input, ...props.style }}
            placeholder={props.textPlaceholder}
            onChangeText={props.onChangeHandler}
            value={props.inputValue}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: colors.secondary,
        borderWidth: 1,
        height: 40,
        marginVertical: 5,
    },
});

export default Input;
