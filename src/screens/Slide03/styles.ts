import {StyleSheet} from "react-native"
import { colors } from "../../styles/GlobalStyles"

export const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: colors.cor_fundo,
        justifyContent: 'center'
        
    },

    buttonContainer: {
        flex: 1,
        bottom:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'

    }

})