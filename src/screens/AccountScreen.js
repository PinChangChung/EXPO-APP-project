import React from "react";
import { View, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Center, Box, VStack, HStack, Text, Image, Divider } from "@gluestack-ui/themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useDispatch } from "react-redux";
import { logout } from "../redux/slice";

const AccountScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFE27B", height: "100%" }}>
      <ScrollView>
        <VStack>
          <Box h={120} justifyContent='center' alignItems='center' mt={30}>
            <MaterialCommunityIcons name="account-circle" size={80} />
          </Box>
          <Center h={30} w={"100%"} mb={30}>
            <Text fontSize={20}>歡迎，使用者</Text>
          </Center>
          <VStack w={"100%"} justifyContent="center" alignItems="center">
            <TouchableOpacity style={styles.actionBotton} onPress={() => null}>
              <Center h={"100%"} alignItems="flex-start" ml={25}>
                <HStack>
                  <MaterialCommunityIcons name="draw-pen" size={30} color={"#F29D38"} />
                  <Text color="#F29D38" fontSize={20} ml={8}>
                    修改會員資料
                  </Text>
                </HStack>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBotton} onPress={() => null}>
              <Center h={"100%"} alignItems="flex-start" ml={25}>
                <HStack>
                  <MaterialCommunityIcons name="card-text" size={30} color={"#F29D38"} />
                  <Text color="#F29D38" fontSize={20} ml={8}>
                    綁定悠遊卡
                  </Text>
                </HStack>
              </Center>
            </TouchableOpacity>
          </VStack>

          <Box w={"100%"} alignItems="center" mt={10} mb={10}>
            <Divider backgroundColor="#F29D38" w={"90%"} />
          </Box>

          <VStack w={"100%"} justifyContent="center" alignItems="center">
            <TouchableOpacity style={styles.actionBotton} onPress={() => null}>
              <Center h={"100%"} alignItems="flex-start" ml={25}>
                <HStack>
                  <MaterialCommunityIcons name="currency-usd" size={30} color={"#F29D38"} />
                  <Text color="#F29D38" fontSize={20} ml={8}>
                    收費方式
                  </Text>
                </HStack>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBotton} onPress={() => null}>
              <Center h={"100%"} alignItems="flex-start" ml={25}>
                <HStack>
                  <MaterialCommunityIcons name="bicycle" size={30} color={"#F29D38"} />
                  <Text color="#F29D38" fontSize={20} ml={8}>
                    設備介紹
                  </Text>
                </HStack>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBotton} onPress={() => null}>
              <Center h={"100%"} alignItems="flex-start" ml={25}>
                <HStack>
                  <MaterialCommunityIcons name="bike" size={30} color={"#F29D38"} />
                  <Text color="#F29D38" fontSize={20} ml={8}>
                    騎乘須知
                  </Text>
                </HStack>
              </Center>
            </TouchableOpacity>
          </VStack>



          <Box w={"100%"} alignItems="center" mt={10} mb={10}>
            <Divider backgroundColor="#F29D38" w={"90%"} />
          </Box>

          <VStack w={"100%"} justifyContent="center" alignItems="center" mb={40}>
            <TouchableOpacity style={styles.logoutBotton} onPress={() => dispatch(logout())}>
              <Center h={"100%"} alignItems="flex-start" ml={25}>
                <HStack>
                  <MaterialCommunityIcons name="logout" size={30} color={"#fff"} />
                  <Text color="#fff" fontSize={20} ml={8}>
                    登出
                  </Text>
                </HStack>
              </Center>
            </TouchableOpacity>
          </VStack>
        </VStack>

      </ScrollView>
    </SafeAreaView>
  );
};

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

export default AccountScreen;
