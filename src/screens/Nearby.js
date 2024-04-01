import React from "react";
import { View, TextInput, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Center, Box, VStack, HStack, Text } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Nearby = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFE27B", height: "100%" }} >
      <Center>

        <View style={styles.searchbar} >
          <View className="flex-row justify-end items-center rounded-full" style={{backgroundColor:'light gray'}}>
            <TextInput
              placeholder="搜尋站名" 
              placeholderTextColor={'#F29D38'}
              style={styles.searchtext}
              />
              <TouchableOpacity style={styles.magnify} onPress={() => null}>
              <MaterialCommunityIcons name="magnify" size={55} color={"#F29D38"} />
              </TouchableOpacity>
          </View>
        </View>

        <VStack>
          <HStack>
            <Center w={"100%"}>
              <Box bg="#fff" h={200} w={"80%"} borderRadius={17}>
                <HStack h={100} justifyContent="center" alignItems="center" mt={50}>
                  <Box bg="#D9D9D9" h={150} w={200}>
                    <Center h={"100%"}>
                      <Text style={{fontSize:72}}>
                        MAP
                      </Text>
                    </Center>
                  </Box>
                </HStack>
              </Box>
            </Center>
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
  searchbar:{
    height:'25%',
    width:'80%',
    backgroundColor:'#fff',
    borderRadius:50,
    marginBottom:20,
    marginTop:10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 1.5,
    elevation: 4,
  },
  searchtext:{
    marginLeft:25,
    marginTop:25,
    fontSize:20,
  },
  magnify:{
    marginTop:-40,
    marginLeft:'80%'
  }
})

export default Nearby;
