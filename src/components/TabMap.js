import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Center, Box, VStack, HStack, Text, Divider, Pressable } from "@gluestack-ui/themed";
import LottieView from "lottie-react-native";

import MapScreen from "../screens/MapScreen";
import { useNavigation } from "@react-navigation/native";


export default () => {
    const { navigate } = useNavigation();

    return (
        <Pressable
            onPress={() => navigate("Map")}
            bg="#5686E1"
            width={100}
            height={100}
            hardShadow="5"
            borderRadius="$full"
            justifyContent="center"
            alignItems="center"
            position="relative"
            bottom={50}
        >
            <Box flex={1} pt={5}>
                <LottieView style={{ width:80, height:80 }} source={require("../json/map.json")} speed={2} autoPlay loop />
            </Box>

        </Pressable>

    );
};