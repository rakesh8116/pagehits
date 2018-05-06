import { Keyboard, Dimensions } from "react-native";
import { NavigationActions } from "react-navigation";
var numeral = require("numeral");
var emailValidator = require("email-validator");
let moment = require("moment");



export function isEmpty(string) {
    return string == null || string == "" || string.length == 0 || string === undefined ? true : false;
}

export function dismissKeyboard() {
    Keyboard.dismiss();
}

export function getDecimalFormatterNumber(value, decimalPlace) {
    switch (decimalPlace) {
        case 0:
            return numeral(value);
        case 1:
            return numeral(value).format('0,0.0');
        case 2:
            return numeral(value).format('0,0.00');
        default:
            return numeral(value);

    }
}

export function navigateWithNoStack(navigation, screenName) {
    const actionToDispatch = NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: screenName })]
    });
    navigation.dispatch(actionToDispatch);
}

export function navigateToLogin(navigation) {
    const actionToDispatch = NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: 'Login' })]
    });
    navigation.dispatch(actionToDispatch);
}

export function validateEmail(email) {
    return emailValidator.validate(email);
}

export function getDateInFormat(dateBeingShown) {
    moment.locale('en');
    return moment(dateBeingShown).format('YYYY-M-D');
}


