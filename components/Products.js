import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

export const Products = ({ name }) => {
    return (
        <TouchableWithoutFeedback onPress={() => console.log("supprimé")}>
            <View style={styles.items} onPress={() => console.log("supprimé")}>
                <Text style={styles.element}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
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
