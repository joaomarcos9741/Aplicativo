import { ImageBackground } from "react-native";
import { styleContainer } from "../../styles/GlobalStyles"
import { styles } from "./styles"
import { ButtonSlide } from "../../components/ButtonSlide"

export function Slide01() {
    const slide = require('../../assets/Tela_de_Fundo.png')
    return(
        <ImageBackground source={slide} style={styleContainer.container}>
            <view style={styles.fundo}>

                <ButtonSlide />
                <ButtonSlide />
                <ButtonSlide />
                
            </view>
        </ImageBackground>
    )

}