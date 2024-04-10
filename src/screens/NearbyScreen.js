import React from "react";
import { View, TextInput, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Center, Box, VStack, HStack, Text, Image } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Nearby = () => {
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
      </Center>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default Nearby;
