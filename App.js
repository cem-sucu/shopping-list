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

    const submitHandler = (product, setProduct) => {
        const idString = Date.now().toString();
        setMyProducts((currentMyProduct) => [
            { key: idString, name: product },
            ...currentMyProduct,
        ]);
        setProduct(""); // cela permet de vider le input une fois le texte saisi validé
    };
    return (
        // view de l'input créé dans le components Addproduct
        <View style={styles.container}>
            <AddProduct submitHandler={submitHandler} />

            {/* view des items validé et affiché  crée dans compoennt Products*/}
            <FlatList
                data={myProducts}
                renderItem={({ item }) => <Products name={item.name} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 40, paddingTop: 60 },
});
