import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Center, Box, VStack, HStack, Text } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFE27B", height: "100%" }} >
      <Center>
        <VStack>
          <HStack>
            <Center w={"100%"}>
              <Box bg="#fff" h={154} w={"90%"} borderRadius={17}>

              </Box>
            </Center>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginVertical={22}>
            <Box w={"36%"} h={"100%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={()=> navigate("Near")}>
                <VStack h={"100%"} justifyContent="center" alignItems="center">
                  <MaterialCommunityIcons name="map-marker" size={55} color={"#5686E1"} />
                  <Text color={"#5686E1"}>
                    附近站點
                  </Text>
                </VStack>
              </TouchableOpacity>
            </Box>
            <Box w={"36%"} h={"100%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={()=> navigate("Favorite")}>
                <VStack h={"100%"} justifyContent="center" alignItems="center">
                  <MaterialCommunityIcons name="heart" size={55} color={"#EB3223"} />
                  <Text color={"#EB3223"}>
                    最愛站點
                  </Text>
                </VStack>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginBottom={10}>
            <Box w={"36%"} h={"100%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={()=> navigate("Map")}>
                <VStack h={"100%"} justifyContent="center" alignItems="center">
                  <MaterialCommunityIcons name="map" size={55} color={"#56D665"} />
                  <Text color={"#56D665"}>
                    站點地圖
                  </Text>
                </VStack>
              </TouchableOpacity>
            </Box>
            <Box w={"36%"} h={"100%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={()=> navigate("Route")}>
                <VStack h={"100%"} justifyContent="center" alignItems="center">
                  <MaterialCommunityIcons name="bicycle" size={55} color={"#F29D38"} />
                  <Text color={"#F29D38"}>
                    騎乘路線
                  </Text>
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
  }
})

export default HomeScreen;
