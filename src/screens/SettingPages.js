import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Pressable } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SettingScreen from './SettingScreen';
import ModeScreen from './ModeScreen'

const Stack = createNativeStackNavigator();

const SettingPages = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: "#FFE27B"
                }
            }}
        >
            <Stack.Screen
                name="setting"
                component={SettingScreen}
                options={{
                    title: "設定",
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontSize: 18
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'menu'}
                            size={30}
                            color={'#F29D38'}
                            onPress={() => navigation.openDrawer()}
                            style={{ marginRight: 20 }}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="mode"
                component={ModeScreen}
                options={
                    ({ navigation }) => (
                        {
                            title: "   深淺模式",
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

export default SettingPages;