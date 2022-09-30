import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export const Products = ({ name }) => {
    return (
        <TouchableHighlight
            style={{ backgroundColor: "cyan" }}
            onPress={() => console.log("supprimé")}
            activeOpacity={0.8} // gere la couleur du toucher lorsque l'on appuie sur le l'élèment
            underlayColor="darkblue" // permet de changer la couleur au moment du press sur l'élèment
        >
            <View style={styles.items}>
                <Text style={styles.element}>{name}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    items: { marginTop: 10, marginBottom: 10 },
    element: {
        backgroundColor: "#87cefa",
        borderRadius: 5,
        padding: 20,
        fontSize: 17,
        marginVertical: 6,
    },
});
