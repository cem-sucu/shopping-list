import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
} from "react-native";
import { Products } from "./components/Products";
import { AddProduct } from "./components/AddProduct";

export default function App() {
    const [myProducts, setMyProducts] = useState([]);

    const submitHandler = (product) => {
        const idString = Date.now().toString();
        setMyProducts((currentMyProduct) => [
            { key: idString, name: product },
            ...currentMyProduct,
        ]);
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
