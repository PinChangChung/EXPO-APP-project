import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Center, Box, VStack, HStack, Text, Image } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeScreen = () => {
  const { navigate } = useNavigation();

  const nearpot = "科技大樓站";

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFE27B", height: "100%" }} >
      <Center>
        <VStack>
          <HStack>
            <Center w={"100%"}>
              <Box bg="#fff" h={200} w={"90%"} borderRadius={17}>
                <Center h={"85%"}>
                  <HStack mb={10} mt={-20} h={50} justifyContent="center" alignItems="center">
                    <Text fontSize={18}>
                      離您最近的站點：<Text fontWeight="bold" fontSize={20}>{nearpot}</Text>
                    </Text>
                  </HStack>
                  <HStack h={50} justifyContent="center" alignItems="center" mt={22}>
                    <Box mt={5} bg="#D9D9D9" h={110} w={157}>
                      <Image h={"100%"} w={"100%"} source={require("../../midterm_img/螢幕擷取畫面 2024-04-06 165836.png")} />
                    </Box>
                    <VStack ml={20}>
                      <Text>
                        空柱：10
                      </Text>
                      <Text>
                        可借車輛：15
                      </Text>
                    </VStack>
                  </HStack>
                </Center>
              </Box>
            </Center>
          </HStack>
          <HStack>
            <Center w={"100%"} mt={10}>
              <Box bg="#fff" h={150} w={"90%"} borderRadius={17}>
                <HStack h={"100%"} justifyContent="center" alignItems="center">
                  <HStack mr={25} h={70} justifyContent="center" alignItems="center">
                    <MaterialCommunityIcons name="weather-partly-cloudy" size={70} color={"#F29D38"} />
                  </HStack>
                  <VStack>
                    <Text fontWeight="bold" fontSize={20} pb={5}>
                      大安區
                    </Text>
                    <Text pb={2}>
                      晴時有雲
                    </Text>
                    <Text pb={10}>
                      30°C
                    </Text>
                    <HStack>
                      <MaterialCommunityIcons name="weather-pouring" size={22} color={"#F29D38"} />
                      <Text pl={3} pb={5}>
                        降雨機率：2%
                      </Text>
                    </HStack>
                  </VStack>
                </HStack>
              </Box>
            </Center>
          </HStack>
          <HStack w={"100%"} h={125} space="lg" justifyContent="center" marginVertical={22}>
            <Box w={"36%"} h={"100%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Near")}>
                <VStack h={"100%"} justifyContent="center" alignItems="center">
                  <MaterialCommunityIcons name="map-marker" size={55} color={"#5686E1"} />
                  <Text color={"#5686E1"}>
                    附近站點
                  </Text>
                </VStack>
              </TouchableOpacity>
            </Box>
            <Box w={"36%"} h={"100%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Favorite")}>
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
              <TouchableOpacity onPress={() => navigate("Map")}>
                <VStack h={"100%"} justifyContent="center" alignItems="center">
                  <MaterialCommunityIcons name="map" size={55} color={"#56D665"} />
                  <Text color={"#56D665"}>
                    站點地圖
                  </Text>
                </VStack>
              </TouchableOpacity>
            </Box>
            <Box w={"36%"} h={"100%"} bg="#fff" borderRadius={20} style={styles.shadow}>
              <TouchableOpacity onPress={() => navigate("Route")}>
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
