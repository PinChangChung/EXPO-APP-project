import React from "react";
import { View, TextInput,  ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Center, Box, VStack, HStack, Image } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Favorite = () => {
  const { navigate } = useNavigation();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFE27B", height: "100%" }} >
      <Center>
        <Box style={styles.searchbar} >
          <View className="rounded-full" style={{ backgroundColor: 'light gray' }}>
            <Box h={"100%"} justifyContent="center" >
              <TextInput
                placeholder="搜尋站名"
                placeholderTextColor={'#F29D38'}
                style={styles.searchtext}
              />
              <TouchableOpacity style={styles.magnify} onPress={() => null}>
                <MaterialCommunityIcons name="magnify" size={37} color={"#F29D38"} />
              </TouchableOpacity>
            </Box>
          </View>
        </Box>
        <Image h={300} w={"100%"} source={require("../../midterm_img/螢幕擷取畫面 2024-04-06 173741.png")} />
        <VStack w={"100%"}>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginTop={22}>
            <Box w={"80%"} h={"70%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Near")}>
                <VStack h={"100%"} justifyContent="center" pl={10}>
                  <MaterialCommunityIcons name="heart" size={40} color={"red"} />
                </VStack>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginVertical={-30}>
            <Box w={"80%"} h={"70%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Near")}>
                <VStack h={"100%"} justifyContent="center" pl={10}>
                  <MaterialCommunityIcons name="heart" size={40} color={"red"} />
                </VStack>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginVertical={0}>
            <Box w={"80%"} h={"70%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Near")}>
                <VStack h={"100%"} justifyContent="center" pl={10}>
                  <MaterialCommunityIcons name="heart" size={40} color={"red"} />
                </VStack>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginVertical={-30}>
            <Box w={"80%"} h={"70%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Near")}>
                <VStack h={"100%"} justifyContent="center" pl={10}>
                  <MaterialCommunityIcons name="heart" size={40} color={"red"} />
                </VStack>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginVertical={0}>
            <Box w={"80%"} h={"70%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Near")}>
                <VStack h={"100%"} justifyContent="center" pl={10}>
                  <MaterialCommunityIcons name="heart" size={40} color={"red"} />
                </VStack>
              </TouchableOpacity>
            </Box>
          </HStack>
        </VStack>
      </Center>
    </ScrollView>
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
    height: 65,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 1.5,
    elevation: 4,
  },
  searchtext: {
    marginLeft: 15,
    marginTop: 5,
    fontSize: 15,
  },
  magnify: {
    marginTop: -30,
    marginLeft: '80%'
  }
})

export default Favorite;
