import React, { useState, useCallback, useEffect } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Modal,
    Text,
    Pressable,
    Image,
    ImageBackground,
    RefreshControl,
} from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const fetchFonts = () => {
    return Font.loadAsync({
        peralta: require("./assets/fonts/Peralta-Regular.ttf"),
    });
};

import { StatusBar } from "react-native"; // import pour le status bar
import { Products } from "./components/Products";
import { AddProduct } from "./components/AddProduct";
import { DismissKeyboard } from "./components/DismissKeyboard";
import ButtonComponent from "./components/ButtonComponent";
import Header from "./components/Header";
import Colors from "./constants/colors";
import colors from "./constants/colors";

SplashScreen.preventAutoHideAsync();

export default function App() {
    StatusBar.setBarStyle("light-content", true); // pour avoir le statusbar en noir sur fond blanc

    const [myProducts, setMyProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    // const [fontsLoaded, setFontsLoaded] = useState(false);
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    peralta: require("./assets/fonts/Peralta-Regular.ttf"),
                });
                await new Promise((resolve) => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    const onRefresh = () => {
        //TODO on peut faire ca sur 2 ligne
        // setRefresh(true);
        // setRefresh(false);
        //TODO ou alors
        setRefresh(!true);
        //qui revient a la m??me chose
    };

    const submitHandler = (product) => {
        setDisplayModal(false);
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

    const cancelNewProduct = () => {
        setDisplayModal(false);
    };
    return (
        // view de l'input cr???? dans le components Addproduct
        <DismissKeyboard>
            <ImageBackground
                style={styles.bgImage}
                source={{
                    uri: "https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_960_720.jpg",
                }}
            >
                <Header />
                <View style={styles.container} onLayout={onLayoutRootView}>
                    <Modal
                        visible={showModal}
                        onRequestClose={() => setShowModal(false)} // uniquement sur android pour fermer modal
                        // presentationStyle={"pageSheet"} // sur ios pour fermer modal
                        animationType="slide" // fait l'animation de l'affichage de la modal
                        transparent // rend transparent l'arri??re du modal
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
                                    <Image
                                        source={require("./assets/red-check-128.png")}
                                        style={styles.redCheck}
                                    />
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
                    <ButtonComponent
                        onPressHandler={() => setDisplayModal(true)}
                        style={styles.addProductBtn}
                    >
                        Ajouter nouveau produit
                    </ButtonComponent>

                    <AddProduct
                        submitHandler={submitHandler}
                        displayModal={displayModal}
                        cancelNewProduct={cancelNewProduct}
                    />

                    {/*la view des items valid?? et affich??  cr??e dans compoennt Products*/}

                    <FlatList
                        //TODO le snippet pour changer la couleur du refresh + le nom
                        refreshControl={
                            <RefreshControl
                                title="rafra??chissement"
                                tintColor={Colors.white}
                                titleColor={Colors.white}
                            />
                        }
                        //TODO fin du snippet change color refresh
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
            </ImageBackground>
        </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: { padding: 40, flex: 1 },
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
        backgroundColor: Colors.white,
        width: "90%",
        height: 300,
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
        borderBottomColor: Colors.secondary,
    },
    modalHeaderText: {
        color: colors.product,
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
        color: Colors.product,
        fontSize: 14,
    },
    modalFooter: {
        width: "100%",
    },
    pressableBtnModal: {
        backgroundColor: colors.dark,
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 14, // arrondie les angles du modal
        borderBottomRightRadius: 14,
    },
    modalBtn: {
        fontSize: 17,
        color: colors.white,
        fontWeight: "bold",
        padding: 16,
    },
    redCheck: {
        width: 100,
        height: 100,
    },
    addProductBtn: {
        backgroundColor: Colors.success,
        padding: 20,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: Colors.info,
        marginBottom: 10,
    },
    bgImage: {
        flex: 1,
    },
});
