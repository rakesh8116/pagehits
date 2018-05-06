import React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    ScrollView
} from 'react-native';
import Styles from '../ViewUtils/Styles';
const CommonParent = (props) => {
    const { safeAreaStyle } = Styles;
    return (
        <SafeAreaView style={[safeAreaStyle, props.addStyle]}>
            <ImageBackground style={{ flex: 1 }} source={require('../Images/backgroundImage.png')}>
                {props.children}
            </ImageBackground>

        </SafeAreaView>
    );
}

export default CommonParent;