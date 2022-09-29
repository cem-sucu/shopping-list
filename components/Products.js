import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Products = ({ name }) => {
    return (
        <View style={styles.items}>
            <Text style={styles.element}>{name}</Text>
        </View>
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
