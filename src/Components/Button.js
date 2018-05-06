import React from "react";
import { Text, View, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import Styles from "../ViewUtils/Styles";

render = props => {
    const { buttonStyle } = Styles;
    const { isLoading, textStyle } = props;
    if (isLoading) {
        return (
            <View style={[buttonStyle, props.buttonStyle]}>
                <ActivityIndicator
                    style={{ position: "absolute" }}
                    size="large"
                    color="#fff"
                />
            </View>
        );
    } else {
        return (
            <View style={[buttonStyle, props.buttonStyle]}>
                <Text style={[styles.buttonPrimaryStyle, textStyle]}>{props.text}</Text>
            </View>
        );
    }
};

const Button = props => {
    return render(props);
};

export default Button;


const styles = StyleSheet.create({
    buttonPrimaryStyle: { fontSize: 20, color: "#fff" },
})