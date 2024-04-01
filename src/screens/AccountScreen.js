import React from 'react';

import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Login from "../screens/LoginScreen"


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Account = () => {
    const { navigate } = useNavigation();
    const HasLogged = false;

    if (HasLogged == true) {
        return (
            null
        )
    } else {
        return (<Login />)
    }

}

export default Account;