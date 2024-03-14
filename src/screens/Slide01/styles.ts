import {StyleSheet} from "react-native"
import { colors } from "../../styles/GlobalStyles"

export const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: colors.cor_fundo,
        justifyContent: 'center',
        alignItems: 'center'

    },

    buttonContainer: {
        flex: 1,
        bottom:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        width:400

    },

    img: {
        width: 220,
        height: 220,
        marginTop: 150,
        display: 'flex'

    },


    centralizar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    

})