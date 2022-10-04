import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export const DismissKeyboard = ({ children }) => {
    return (
        //TODO le TouchableWithoutFeedback permet d'enlever le clavier en cliquant dans le vide, il faut également dans ce cas de figure dans app.js dans le styles container rajouter flex: 1, pour pouvoir étendre la zone cliquable sur tout l'écran
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
};
