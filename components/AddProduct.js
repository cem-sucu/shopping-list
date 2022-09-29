import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export const AddProduct = ({ submitHandler }) => {
    const [product, setProduct] = useState("");
    const inputHandler = (val) => {
        setProduct(val);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Nouveau produit"
                onChangeText={inputHandler}
                value={product}
            />
            <Button
                title="valider"
                onPress={() => submitHandler(product, setProduct)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: { flexDirection: "row", marginBottom: 15 },
    textInput: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        paddingLeft: 9,
        fontSize: 18,
        flexGrow: 1,
    },
});
