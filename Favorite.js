import React from "react";
import { View, TextInput, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Center, Box, VStack, HStack, Text } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Favorite = () => {
  const { navigate } = useNavigation();

  const nearpot = "科技大樓站";

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
                <MaterialCommunityIcons name="magnify" size={55} color={"#F29D38"} />
              </TouchableOpacity>
            </Box>
          </View>
        </Box>

        <VStack>
          <HStack>
            <Center w={"100%"}>
              <Box bg="#fff" h={200} w={"80%"} borderRadius={17}>
                <HStack h={100} justifyContent="center" alignItems="center" mt={50}>
                  <Box bg="#D9D9D9" h={150} w={200}>
                    <Center h={"100%"}>
                      <Text style={{ fontSize: 72 }}>
                        MAP
                      </Text>
                    </Center>
                  </Box>
                </HStack>
              </Box>
            </Center>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginTop={22}>
            <Box w={"80%"} h={"70%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Near")}>
                <VStack h={"100%"} justifyContent="center" >
                  <MaterialCommunityIcons name="heart" size={55} color={"red"} />
                </VStack>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginVertical={-30}>
            <Box w={"80%"} h={"70%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Near")}>
                <VStack h={"100%"} justifyContent="center" >
                  <MaterialCommunityIcons name="heart" size={55} color={"red"} />
                </VStack>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginVertical={0}>
            <Box w={"80%"} h={"70%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Near")}>
                <VStack h={"100%"} justifyContent="center" >
                  <MaterialCommunityIcons name="heart" size={55} color={"red"} />
                </VStack>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginVertical={-30}>
            <Box w={"80%"} h={"70%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Near")}>
                <VStack h={"100%"} justifyContent="center" >
                  <MaterialCommunityIcons name="heart" size={55} color={"red"} />
                </VStack>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginVertical={0}>
            <Box w={"80%"} h={"70%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Near")}>
                <VStack h={"100%"} justifyContent="center">
                  <MaterialCommunityIcons name="heart" size={55} color={"red"} />
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
    marginTop: 12,
    fontSize: 20,
  },
  magnify: {
    marginTop: -40,
    marginLeft: '80%'
  }
})

export default Favorite;
