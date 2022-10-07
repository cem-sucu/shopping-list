import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import colors from "../constants/colors";

export const Products = ({ name, deleteProduct, idString }) => {
    return (
        <Pressable
            onPress={() => deleteProduct(idString)}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? colors.click : "transparent",
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
    items: {
        marginTop: 1,
        marginBottom: 1,
        backgroundColor: colors.bgproduct,
        borderRadius: 21,
    },
    element: {
        overflow: "hidden",

        color: colors.white,
        padding: 20,
        fontSize: 17,
        marginVertical: 6,
        marginBottom: 5,
        textAlign: "center",
    },
});
