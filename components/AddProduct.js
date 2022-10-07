import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import ButtonComponent from "./ButtonComponent";
import { StatusBar } from "react-native";

export const AddProduct = ({
    submitHandler,
    displayModal,
    cancelNewProduct,
}) => {
    const [product, setProduct] = useState("");

    const inputHandler = (val) => {
        setProduct(val);
        StatusBar.setBarStyle("dark-content", true);
    };

    const handleClick = () => {
        submitHandler(product);
        setProduct(""); // cela permet de vider le input une fois le texte saisi validé
    };

    return (
        <Modal visible={displayModal} animationType="slide">
            {/* permet de changer le status bar en focntion de la couleur de fond */}
            <StatusBar
                animated={true}
                color="#ffffff" // marche sur android, détange pa sur ios
                backgroundColor="#000000" // marhce sur android / pas sur ios
                barStyle={"dark-content"} // marche sur ios /pas sur android
                showHideTransition={"fade"}
            />
            {/* fin status bar */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nouveau produit"
                    onChangeText={inputHandler}
                    value={product}
                    // editable={false} permet d'interdire d'écire dans le champs
                    // multiline permet d'écire sur plusieurs lignes
                    // maxLength={9} limiter le  nombre de caractère écrivable a 9 exemple
                    // secureTextEntry pour écrire les mots de passe, transforme le caractère en point noire c'est a dire cachée
                />
                <View style={styles.btnContainer}>
                    <ButtonComponent
                        // btnTitle="Valider" comme on a fait le destructuring au composant ButtonComponent on a pas besoin de faire btnTitle pour ecrire un mots sur le button on peut l'écire come dhab entre les <button>ICI</button>
                        onPressHandler={handleClick}
                        style={styles.btnBlue}
                    >
                        Valider
                    </ButtonComponent>
                    <ButtonComponent
                        // btnTitle="Annuler"
                        onPressHandler={cancelNewProduct}
                        style={styles.btnTomato}
                    >
                        Annuler
                    </ButtonComponent>
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
        setBarStyle: "dark-content",
    },
    textInput: {
        borderColor: "grey",
        borderWidth: 1,
        marginTop: 45,
        padding: 10,
        paddingLeft: 9,
        fontSize: 18,
        marginBottom: 9,
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
        backgroundColor: "#8fbc8f",
        width: 150,
        borderRadius: 6,
    },
    btnTomato: {
        backgroundColor: "#ff6347",
        width: 150,
        borderRadius: 6,
    },
});
