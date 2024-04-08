import React from "react";
import { View, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Center, Box, VStack, HStack, Text, Image } from "@gluestack-ui/themed";
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
          <Center h={30} w={"100%"}>
            <Text>歡迎，使用者</Text>
          </Center>
          <VStack w={"100%"} justifyContent="center" alignItems="center">
            <TouchableOpacity style={styles.actionBotton} onPress={() => dispatch(logout())}>
              <Center>
                <Text color="#F29D38">
                  登出
                </Text>
              </Center>
            </TouchableOpacity>
          </VStack>
        </VStack>
        <Image h={300} w={"100%"} source={require("../../midterm_img/螢幕擷取畫面 2024-04-06 173741.png")} />

      </ScrollView>
    </SafeAreaView>
  );
};

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
  actionBotton: {
    width: "86%",
    backgroundColor: '#FAFAFA',
    borderRadius: 2,
    marginBottom: 13,
    marginTop: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 1.5,
    elevation: 4,
  }

})

export default AccountScreen;
