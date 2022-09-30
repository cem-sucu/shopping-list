import React, { useState } from "react";
import { StyleSheet, View, FlatList, Modal, Text } from "react-native";
import { Products } from "./components/Products";
import { AddProduct } from "./components/AddProduct";

export default function App() {
    const [myProducts, setMyProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const submitHandler = (product) => {
        if (product.length > 1) {
            const idString = Date.now().toString();
            setMyProducts((currentMyProduct) => [
                { key: idString, name: product },
                ...currentMyProduct,
            ]);
        } else {
            setShowModal(true);
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
            <Modal
                visible={showModal}
                onRequestClose={() => setShowModal(false)} // uniquement sur android pour fermer modal
                presentationStyle={"pageSheet"} // sur ios pour fermer modal
            >
                <Text>La modal</Text>
            </Modal>
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
