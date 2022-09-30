import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export const AddProduct = ({ submitHandler }) => {
    const [product, setProduct] = useState("");

    const inputHandler = (val) => {
        setProduct(val);
    };

    const handleClick = () => {
        submitHandler(product);
        setProduct(""); // cela permet de vider le input une fois le texte saisi validé
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Nouveau produit"
                onChangeText={inputHandler}
                value={product}
            />
            <Button title="valider" onPress={handleClick} />
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
