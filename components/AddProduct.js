import React, { useState } from "react";
import { StyleSheet, View, Modal } from "react-native";
import ButtonComponent from "./ButtonComponent";
import { StatusBar } from "react-native";
import colors from "../constants/colors";
import Input from "./Input";

export const AddProduct = ({
    submitHandler,
    displayModal,
    cancelNewProduct,
}) => {
    const [product, setProduct] = useState("");

    const inputHandler = (val) => {
        // const regex = /[^a-z]/gi; pour refuser tout ce qui est en dehors de 0 à 9
        const regex = /[^a-z]/gi;  // expression régulière REGEX pour refuser tout ce qui est en dehors de A à Z
        setProduct(val.replace(regex, ""));
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
                color={colors.white} // marche sur android, dérange pas sur ios
                backgroundColor={colors.dark} // marhce sur android / pas sur ios
                barStyle={"dark-content"} // marche sur ios /pas sur android
                showHideTransition={"fade"}
            />
            {/* fin status bar */}
            <View style={styles.inputContainer}>
                <Input
                    style={styles.textInput}
                    textPlaceholder="Nouveau produit"
                    onChangeHandler={inputHandler}
                    inputValue={product}
                    maxLength={10}
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
        padding: 20,
        setBarStyle: "dark-content",
    },
    textInput: {
        borderRadius: 30,
        marginTop: 30,
        padding: 10,
        paddingLeft: 9,
        fontSize: 18,
        marginBottom: 9,
        textAlign: "center",
        height: 50,
    },
    //TODO le style que j'ai mis pour ios pour un button sur ios
    /*  bgios: {
        borderRadius: 5,
        backgroundColor: Colors.blue,
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
        backgroundColor: colors.success,
        width: 150,
        borderRadius: 6,
    },
    btnTomato: {
        backgroundColor: colors.warning,
        width: 150,
        borderRadius: 6,
    },
});
