import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {styles} from './styles';
interface IButton extends TouchableOpacityProps {
    onPressI: () => void
    cor: boolean
}

export function ButtonSlide({onPressI, cor}: IButton) {
    return(
        <TouchableOpacity style={cor ? styles.ballCor : styles.ball} onPress={onPressI}/>
    )
}