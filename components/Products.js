import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export const Products = ({ name, deleteProduct, idString }) => {
    return (
        <Pressable
            onPress={() => deleteProduct(idString)}
            style={({ pressed }) => [
                { backgroundColor: pressed ? "#00ffff" : "#add8e6" },
            ]}
        >
            <View style={styles.items}>
                <Text style={styles.element}>{name}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    items: { marginTop: 10, marginBottom: 10},
    element: {
        backgroundColor: "#87cefa",
        borderRadius: 5,
        color: "#ffffff",
        padding: 20,
        fontSize: 17,
        marginVertical: 6,
    },
});
