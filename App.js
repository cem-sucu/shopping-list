import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import { Products } from "./components/Products";
import { AddProduct } from "./components/AddProduct";

export default function App() {
    const [myProducts, setMyProducts] = useState([]);

    const submitHandler = (product) => {
        if (product.length > 1) {
            const idString = Date.now().toString();
            setMyProducts((currentMyProduct) => [
                { key: idString, name: product },
                ...currentMyProduct,
            ]);
        } else {
            Alert.alert(
                "Désolé",
                "veuillez remplir le champ avant de valider",
                [
                    {
                        text: "compris",
                        onPress: () => console.warn("refusé"),
                        style: "destructrive",
                    },
                    {
                        text: "d'accord",
                        onPress: () => console.warn("refusé"),
                        style: "destructive",
                    },
                    {
                        text: "yes",
                        onPress: () => console.warn("refusé"),
                        style: "destructive",
                    },
                ],
                {
                    cancelable: true, // plateform Android uniquement
                    onDismiss: () => console.warn("dismissed"),
                }
            );
        }
    };

    const deleteProduct = (key) => {
        setMyProducts((currentMyProduct) => {
            return currentMyProduct.filter((product) => product.key != key);
        });
    };
    return (
        // view de l'input créé dans le components Addproduct
        <View style={styles.container}>
            <AddProduct submitHandler={submitHandler} />

            {/* view des items validé et affiché  crée dans compoennt Products*/}
            <FlatList
                data={myProducts}
                renderItem={({ item }) => (
                    <Products
                        name={item.name}
                        deleteProduct={deleteProduct}
                        idString={item.key}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 40, paddingTop: 60 },
});
