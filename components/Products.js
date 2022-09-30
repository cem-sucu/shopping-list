import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export const Products = ({ name }) => {
    return (
        <Pressable
        onPress={() => console.log("supprimé produit")}
        style={({pressed}) => [{ backgroundColor: pressed ? "cyan" : "lightblue" }]}
        >
            <View style={styles.items}>
                <Text style={styles.element}>{name}</Text>
            </View>
        </Pressable>
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
