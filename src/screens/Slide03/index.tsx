import { ImageBackground, View } from "react-native";
import { styleContainer } from "../../styles/GlobalStyles"
import { styles } from "./styles"
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";

export function Slide03({setPageI}:IPagina) {
    const slide = require('../../assets/Tela_de_Fundo.png')
    return(
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.fundo}>

                <ButtonSlide onPressI={() => setPageI(1)} />
                <ButtonSlide onPressI={() => setPageI(2)} />
                <ButtonSlide onPressI={() => setPageI(3)} />
                
            </View>
        </ImageBackground>
    )

}