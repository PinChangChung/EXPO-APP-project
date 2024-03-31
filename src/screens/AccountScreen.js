import React from 'react';

import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Account = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
                <MaterialCommunityIcons
                    name={'menu'}
                    size={20}
                    onPress={() => navigation.openDrawer()}
                    style={{ marginRight: 20, position: "relative", top: -40, left: 18 }}
                />
                <Text style={{ textAlign: "center" }}>
                    Account
                </Text>
            </SafeAreaView>

        </SafeAreaProvider>

    )
}

export default Account;