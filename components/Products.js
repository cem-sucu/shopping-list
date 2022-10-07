import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export const Products = ({ name, deleteProduct, idString }) => {
    return (
        <Pressable
            onPress={() => deleteProduct(idString)}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? "#f08080" : "transparent",
                    borderRadius: 10,
                },
            ]}
        >
            <View style={styles.items}>
                <Text style={styles.element}>{name}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    items: { marginTop: 1, marginBottom: 1 },
    element: {
        backgroundColor: "#b22222",
        overflow: "hidden",
        borderRadius: 21,
        color: "#ffffff",
        padding: 20,
        fontSize: 17,
        marginVertical: 6,
        marginBottom: 5,
        textAlign: "center",
    },
});
