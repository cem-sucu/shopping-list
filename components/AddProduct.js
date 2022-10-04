import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export const AddProduct = ({ submitHandler }) => {
    const [product, setProduct] = useState("");

    const inputHandler = (val) => {
        setProduct(val);
    };

    const handleClick = () => {
        submitHandler(product);
        setProduct(""); // cela permet de vider le input une fois le texte saisi validé
    };

    return (
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
            <Button title="valider" onPress={handleClick} />

            {/*  //TODO pour pouvoir mettre du style sur le button ios  */}
            {/*  <TouchableOpacity onPress={handleClick} style={styles.bgios}>
                <Text style={styles.textios}>Valider ios</Text>
            </TouchableOpacity> */}
            {/* //TODO fin du button pour styliser sur ios */}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: { marginBottom: 15 },
    textInput: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        paddingLeft: 9,
        fontSize: 18,
        flexGrow: 1,
    },
    //TODO le style que j'ai mis pour ios
    /*  bgios: {
        borderRadius: 5,
        backgroundColor: "#1e90ff",
    },
    textios: {
        textAlign: "center",
    }, */
    //TODO fin du style pour ios
});
