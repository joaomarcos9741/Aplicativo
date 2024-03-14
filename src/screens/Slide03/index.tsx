import { ImageBackground, View, Image, Text } from "react-native";
import { styleContainer } from "../../styles/GlobalStyles"
import { styles } from "./styles"
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";

export function Slide03({setPageI}:IPagina) {
    const slide = require('../../assets/Tela_de_Fundo.png')
    const carrinho = require('../../assets/carrinho03.png')
    return(
    <>
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.fundo}>

                <View style={styles.centralizar}>
                    <Image source={carrinho} style={styles.img}></Image >
                    <Text style={styleContainer.text}>CARRINHO</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={true}/>
                </View>

            </View>
        </ImageBackground>
    </>
    )

}