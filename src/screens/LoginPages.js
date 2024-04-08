import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Pressable } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';


const Stack = createNativeStackNavigator();


const LoginPages = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerShown: true,
                headerStyle: {
                    backgroundColor: "#FFE27B"
                }
            }}
        >
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    title: "",
                }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={
                    ({ navigation }) => (
                        {
                            title: "   註冊",
                            headerTintColor: '#000',
                            headerTitleStyle: {
                                fontSize: 15
                            },
                            headerLeft: () => (
                                <Pressable onPress={() => navigation.goBack()}>
                                    <MaterialCommunityIcons
                                        name={'chevron-left'}
                                        size={30}
                                        color={'#F29D38'}
                                    />
                                </Pressable>
                            )
                        }
                    )
                }
            />
        </Stack.Navigator>
    );
}

export default LoginPages;