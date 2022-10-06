import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export const AddProduct = ({
    submitHandler,
    displayModal,
    cancelNewProduct,
}) => {
    const [product, setProduct] = useState("");

    const inputHandler = (val) => {
        setProduct(val);
    };

    const handleClick = () => {
        submitHandler(product);
        setProduct(""); // cela permet de vider le input une fois le texte saisi validé
    };

    return (
        <Modal visible={displayModal} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nouveau produit"
                    onChangeText={inputHandler}
                    value={product}
                    // editable={false} permet d'intedire d'écire dans le champs
                    // multiline permet d'écire sur plusieurs lignes
                    // maxLength={9} limiter le  nombre de caractère écrivable
                    // secureTextEntry pour écrire les mots de passe, transforme le caractère en point noire c'est a dire cachée
                />
                <View style={styles.btnContainer}>
                    <View style={styles.btnBlue}>
                        <Button title="valider" onPress={handleClick} />
                    </View>
                    <View style={styles.btnTomato}>
                        <Button
                            title="annuler"
                            onPress={cancelNewProduct}
                            color="#ff6347"
                        />
                    </View>
                </View>

                {/*  //TODO pour pouvoir mettre du style sur le button ios  */}
                {/*  <TouchableOpacity onPress={handleClick} style={styles.bgios}>
                <Text style={styles.textios}>Valider ios</Text>
            </TouchableOpacity> */}
                {/* //TODO fin du button pour styliser sur ios */}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },
    textInput: {
        borderColor: "grey",
        borderWidth: 1,
        marginTop: 45,
        padding: 10,
        paddingLeft: 9,
        fontSize: 18,
        marginBottom:9,
    },
    //TODO le style que j'ai mis pour ios pour un button sur ios
    /*  bgios: {
        borderRadius: 5,
        backgroundColor: "#1e90ff",
    },
    textios: {
        textAlign: "center",
    }, */
    //TODO fin du style pour ios
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btnBlue: {
        width: "45%",
    },
    btnTomato: {
        width: "45%",
    },
});
