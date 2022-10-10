import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import colors from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
                <MaterialCommunityIcons
                    name="delete-forever"
                    size={29}
                    color={colors.gold}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    items: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: colors.bgproduct,
        borderRadius: 21,
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
        justifyContent: "space-between",
    },
    element: {
        color: colors.white,
        fontSize: 17,
        marginLeft: 20,
        marginBottom: 10,
        margin: 10,
    },
});
