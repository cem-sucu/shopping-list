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

export default function App() {
    const [product, setProduct] = useState("");
    const [myProducts, setMyProducts] = useState([]);

    const inputHandler = (val) => {
        setProduct(val);
    };

    const submitHandler = () => {
        const idString = Date.now().toString();
        setMyProducts((currentMyProduct) => [
            { key: idString, name: product },
            ...currentMyProduct,
        ]);
        setProduct("");
    };
    return (
        // view de l'input
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nouveau produit"
                    onChangeText={inputHandler}
                    value={product}
                />
                <Button title="valider" onPress={submitHandler} />
            </View>

            {/* view des items validé et affiché */}
            <FlatList
                data={myProducts}
                renderItem={({ item }) => <Products name={item.name} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 40, paddingTop: 60 },
    inputContainer: { flexDirection: "row", marginBottom: 15 },
    textInput: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        paddingLeft: 9,
        fontSize: 18,
        flexGrow: 1,
    },
});
