import React, { Component } from 'react';

import{
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
}from 'react-native';

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Utils from '../../../ViewUtils/UtilFunctions';
import CommonParent from '../../../Components/CommonParent';
import CommonStrings from '../../../ViewUtils/Strings';
import Button from '../../../Components/Button';



class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { email: "user@pagehits.com", password: "password" };
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
        this.login = this.login.bind(this);
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    login() {
        if (!Utils.validateEmail(this.state.email)) {
            alert("Enter vaild email id");
        } else if (this.state.password.length < 6) {
            alert("Password has to be minimum 6 characters");
        } else {
            this.props.login(this.state.email, this.state.password);
        }
    }

    render() {

        //DO we need this?
        if (this.props.hasErrored) {
            alert('Error logging in. Please try again later');
            this.props.reset();
        } else if (this.props.loginSuccess) {
            this.props.getOtherDetails();
        } else if (this.props.loginDone) {
            this.props.navigation.navigate('MainDrawer');
            this.props.reset();
        }


        const { navigate, goBack } = this.props.navigation;
        const { textStyle, textInputStyle, safeAreaStyle } = AppStyles;

        return (
            <CommonParent >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Image style={{ height: 80, width: 350 }} source={require('./Images/logo_name.png')} />
                    </View>

                    <View style={styles.containerView}>
                        {/* UserName View */}
                            <View style={styles.rowStyle}>
                                <TextInput
                                    style={[textInputStyle, { flex: 9 }]}
                                    underlineColorAndroid={"transparent"}
                                    keyboardType={"email-address"}
                                    autoCapitalize="none"
                                    placeholder="Username"
                                    placeholderTextColor='#A4A8B0'
                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email}
                                    onSubmitEditing={() => {
                                        this.focusNextField("password");
                                    }}
                                    returnKeyType={"next"}
                                />
                                <Image style={styles.drawableStyle} source={require('./Images/username.png')} />
                            </View>
                            {/* Password View */}
                            <View style={styles.rowStyle}>
                                <TextInput
                                    ref={input => {
                                        this.inputs["password"] = input;
                                    }}
                                    style={[textInputStyle, { flex: 9 }]}
                                    underlineColorAndroid={"transparent"}
                                    secureTextEntry={true}
                                    placeholderTextColor='#A4A8B0'
                                    placeholder="Password"
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                    returnKeyType={"done"}
                                    onSubmitEditing={() => {
                                        this.login();
                                    }}
                                />
                                <Image style={styles.drawableStyle} source={require('./Images/password.png')} />

                            </View>

                            {/* navigate("Drawer") */}
                            <TouchableOpacity onPress={() => this.login()}>
                                <Button
                                    text={"LOGIN"}
                                    buttonStyle={{ marginTop: 50, backgroundColor: '#0E93CB' }}
                                    textStyle={{ fontSize: 20 }}
                                    isLoading={this.props.isLoggingIn} />
                            </TouchableOpacity>
                    </View>

                </View>
            </ CommonParent>
        
    );


    }


}


const styles = StyleSheet.create({
    rowStyle: { height: 45, backgroundColor: 'white', flexDirection: 'row', marginTop: 10, alignItems: 'center', paddingRight: 5 },
    drawableStyle: { height: 33, width: 40, flex: 1 },
    containerView: { flex: 4, marginLeft: 20, marginRight: 20, justifyContent: 'center'},
    forgotPassword: {
        textAlign: "center",
        color: "#E84855",
        marginTop: 20,
        fontSize: 24
    }
})


