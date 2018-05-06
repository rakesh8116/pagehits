import {
    StyleSheet,
    StatusBar,
    Platform,
} from 'react-native';
import CommonStrings from './Strings';
export default StyleSheet.create({
    safeAreaStyle: {
        flex: 1
    },
    parentView: {
        flex: 1
    },
    textStyle: {
        fontSize: 20,
        marginTop: 10,
        fontFamily: 'HelveticaNeue',
        color: '#6F6F6F'
    },
    textInputStyle: {
        height: 45,
        paddingLeft: 2,
        fontSize: 20
    },
    buttonStyle: {
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    valueStyle: {
        fontSize: 15,
        color: '#EBECF2',
        flex: 1,
        textAlign: 'center',
        alignSelf: 'center'
    }
});



