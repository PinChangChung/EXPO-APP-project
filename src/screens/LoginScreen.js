import React from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";


import { View, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Center, Box, VStack, HStack, Text } from "@gluestack-ui/themed";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useDispatch } from "react-redux";
import { login } from "../redux/slice";

const LoginScreen = () => {

    const dispatch = useDispatch();

    const { navigate } = useNavigation();
    return (
        <>
            <View style={{ flex: 1, backgroundColor: "#FFE27B", height: "100%" }}>
                <ScrollView>
                    <VStack>
                        <Box h={250} justifyContent='flex-end' alignItems='center' pb={20}>
                            <MaterialCommunityIcons name="account-circle" size={100} />
                        </Box>
                        <Center>
                            <Box style={styles.searchbar} >
                                <View className="rounded-full">
                                    <Box h={"100%"} justifyContent="center" >
                                        <TextInput
                                            placeholder="帳號"
                                            placeholderTextColor={'#F29D38'}
                                            style={styles.searchtext}
                                        />
                                    </Box>
                                </View>
                            </Box>
                            <Box style={styles.searchbar} >
                                <View className="rounded-full">
                                    <Box h={"100%"} justifyContent="center" >
                                        <TextInput
                                            placeholder="密碼"
                                            placeholderTextColor={'#F29D38'}
                                            style={styles.searchtext}
                                        />
                                    </Box>
                                </View>
                            </Box>
                            <TouchableOpacity style={styles.loginAction} onPress={() => dispatch(login())}>
                                <Center className="rounded-full">
                                    <Box h={"100%"} justifyContent="center" >
                                        <Text color='#fff'>登入</Text>
                                    </Box>
                                </Center>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.tiptext}>
                                    忘記密碼
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate('RegisterScreen')}>
                                <Text style={styles.tiptext}>
                                    尚無帳號？註冊
                                </Text>
                            </TouchableOpacity>
                        </Center>
                    </VStack>
                </ScrollView>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 1.5,
        elevation: 4,
    },
    searchbar: {
        height: 47,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 50,
        marginBottom: 6,
        marginTop: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 1.5,
        elevation: 4,
    },
    searchtext: {
        marginLeft: 15,
        marginTop: 0,
        fontSize: 15,
    },
    tiptext: {
        marginLeft: 0,
        marginTop: 17,
        fontSize: 13,
        color: "#B76E18",
    },
    loginAction: {
        height: 47,
        width: '80%',
        backgroundColor: '#F29D38',
        borderRadius: 50,
        marginBottom: 13,
        marginTop: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 1.5,
        elevation: 4,
    }
})

export default LoginScreen;