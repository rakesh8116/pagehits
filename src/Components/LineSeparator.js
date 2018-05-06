import React from 'react';
import {
    View
} from 'react-native';
const LineSeparator = (props) => {
    return <View style={{ marginLeft: props.margin, marginRight: props.margin, height: props.height ? props.height : 0.6, backgroundColor: props.bgColor }} />;
}

export default LineSeparator;