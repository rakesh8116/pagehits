import React from 'react';
import { Text, View } from 'react-native';
import CommonParent from '../Components/CommonParent';

const ErrorDisplay = (props) => {
    return (
        <CommonParent>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>{props.errorText}</Text>
            </View>
        </CommonParent>
    );
}

export default ErrorDisplay;