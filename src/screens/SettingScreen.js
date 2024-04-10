import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Center, VStack, HStack, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SettingScreen = () => {
    const { navigate } = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFE27B", height: "100%" }}>
            <ScrollView>
                <VStack w={"100%"} justifyContent="center" alignItems="center">
                    <TouchableOpacity style={styles.actionBotton} onPress={() => null}>
                        <Center h={"100%"} alignItems="flex-start" ml={25}>
                            <HStack>
                                <MaterialCommunityIcons name="earth" size={30} color={"#F29D38"} />
                                <Text color="#F29D38" fontSize={20} ml={8}>
                                    語言
                                </Text>
                            </HStack>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionBotton} onPress={() => navigate("mode")}>
                        <Center h={"100%"} alignItems="flex-start" ml={25}>
                            <HStack>
                                <MaterialCommunityIcons name="theme-light-dark" size={30} color={"#F29D38"} />
                                <Text color="#F29D38" fontSize={20} ml={8}>
                                    深/淺模式
                                </Text>
                            </HStack>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionBotton} onPress={() => null}>
                        <Center h={"100%"} alignItems="flex-start" ml={25}>
                            <HStack>
                                <MaterialCommunityIcons name="email" size={30} color={"#F29D38"} />
                                <Text color="#F29D38" fontSize={20} ml={8}>
                                    聯絡我們
                                </Text>
                            </HStack>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionBotton} onPress={() => null}>
                        <Center h={"100%"} alignItems="flex-start" ml={25}>
                            <HStack>
                                <MaterialCommunityIcons name="flag" size={30} color={"#F29D38"} />
                                <Text color="#F29D38" fontSize={20} ml={8}>
                                    問題回報
                                </Text>
                            </HStack>
                        </Center>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionBotton} onPress={() => null}>
                        <Center h={"100%"} alignItems="flex-start" ml={25}>
                            <HStack>
                                <MaterialCommunityIcons name="star" size={30} color={"#F29D38"} />
                                <Text color="#F29D38" fontSize={20} ml={8}>
                                    評價我們
                                </Text>
                            </HStack>
                        </Center>
                    </TouchableOpacity>
                </VStack>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    actionBotton: {
        height: 55,
        width: "86%",
        backgroundColor: '#FAFAFA',
        borderRadius: 8,
        marginBottom: 6,
        marginTop: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 1.5,
        elevation: 4,
    },
    logoutBotton: {
        height: 55,
        width: "86%",
        backgroundColor: '#F29D38',
        borderRadius: 8,
        marginBottom: 6,
        marginTop: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 1.5,
        elevation: 4,
    }

})


export default SettingScreen;