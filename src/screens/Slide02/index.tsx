import { ImageBackground, View, Image, Text } from "react-native";
import { styleContainer } from "../../styles/GlobalStyles"
import { styles } from "./styles"
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";

export function Slide02({setPageI}:IPagina) {
    const slide = require('../../assets/Tela_de_Fundo.png')
    const login = require('../../assets/login02.png')
    return(
    <>
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.fundo}>
            <Image source={login} style={styles.img}></Image >


            <View style={styles.buttonContainer}>
                    <ButtonSlide onPressI={() => setPageI(1)} />
                    <ButtonSlide onPressI={() => setPageI(2)} />
                    <ButtonSlide onPressI={() => setPageI(3)} />
            </View>
                
            </View>
        </ImageBackground>
    </>
    )

}