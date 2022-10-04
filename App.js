import React, { useState } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Modal,
    Text,
    Pressable,
} from "react-native";

import { Products } from "./components/Products";
import { AddProduct } from "./components/AddProduct";
import { DismissKeyboard } from "./components/DismissKeyboard";

export default function App() {
    const [myProducts, setMyProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const onRefresh = () => {
        //TODO on peut faire ca sur 2 ligne
        // setRefresh(true);
        // setRefresh(false);
        //TODO ou alors
        //setRefresh(!true); qui revient a la même chose
    };

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
        <DismissKeyboard>
            <View style={styles.container}>
                <Modal
                    visible={showModal}
                    onRequestClose={() => setShowModal(false)} // uniquement sur android pour fermer modal
                    // presentationStyle={"pageSheet"} // sur ios pour fermer modal
                    animationType="slide" // fait l'animation de l'affichage de la modal
                    transparent // rend transparent l'arrière du modal
                >
                    <View style={styles.modalContainer}>
                        {/* <Text style={styles.modalClosed}>
                        Tirer vers le bas pour fermer ou appuyer sur OK
                    </Text> */}
                        <View style={styles.modalContent}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalHeaderText}>
                                    Oups une erreur c'est produite
                                </Text>
                            </View>
                            <View style={styles.modalBody}>
                                <Text style={styles.modalBodyText}>
                                    Veuillez indiquez un produit
                                </Text>
                            </View>
                            <View style={styles.modalFooter}>
                                <Pressable
                                    style={styles.pressableBtnModal}
                                    onPressIn={() => setShowModal(false)}
                                >
                                    <Text style={styles.modalBtn}>OK</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
                <AddProduct submitHandler={submitHandler} />

                {/* view des items validé et affiché  crée dans compoennt Products*/}
                <FlatList
                    onRefresh={onRefresh}
                    refreshing={refresh}
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
        </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: { padding: 40, paddingTop: 60, flex: 1 },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.0)", // avec le props TRANSPARENt permet d'afficher uniquement la modal
    },
    // modalClosed: {
    //     color: "black",
    //     fontWeight: "bold",
    //     fontSize: 15,
    //     textAlign: "center",
    // },
    modalContent: {
        marginVertical: 230,
        backgroundColor: "white",
        width: "90%",
        height: 250,
        borderRadius: 15,
        alignItems: "center",
        borderWidth: 1, // encadrer la modal d'une ligne
    },
    modalHeader: {
        // backgroundColor: "white",
        width: "100%",
        padding: 16,
        alignItems: "center",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
    },
    modalHeaderText: {
        color: "red",
        fontSize: 17,
        fontWeight: "bold",
    },
    modalBody: {
        flex: 1,
        width: "100%",
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    },
    modalBodyText: {
        color: "red",
        fontSize: 14,
    },
    modalFooter: {
        width: "100%",
    },
    pressableBtnModal: {
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 14, // arrondie les angles du modal
        borderBottomRightRadius: 14,
    },
    modalBtn: {
        fontSize: 17,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
});
