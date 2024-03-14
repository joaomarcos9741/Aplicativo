import { ImageBackground, View, Image, Text } from "react-native";
import { styleContainer } from "../../styles/GlobalStyles"
import { styles } from "./styles"
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";

export function Slide01({setPageI}:IPagina) {
    const slide = require('../../assets/Tela_de_Fundo.png')
    const home = require('../../assets/home01.png')
    return(
    <>
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.fundo}>

            <View style={styles.centralizar}>
                <Image source={home} style={styles.img}></Image >
                <Text style={styleContainer.text}>HOME</Text>
            </View>

            <View style={styles.buttonContainer}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={true}/>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false}/>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={false}/>
            </View>
                
            </View>
        </ImageBackground>
    </>
    )

}