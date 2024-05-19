import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, RefreshControl } from "react-native";
import { Center, Box, VStack, HStack, Text } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useWeatherInfo } from '../tanstack-query';

import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/slice";

import * as turf from '@turf/turf';


export default ({ position }) => {

    const colorMode = useSelector(selectColorMode);
    const textMode = colorMode == "light" ? "#000" : "#E2DDDD";
    const blockMode = colorMode == "light" ? "#FAFAFA" : "#474747";

    const { data, isLoading, isSuccess, isError } = useWeatherInfo();

    const weatherInfo = data?.records?.locations[0];
    console.log(weatherInfo);

    var userpoint = [position.longitude, position.latitude];
    var targetPoint = turf.point(userpoint);
    //console.log(targetPoint);

    var points = turf.featureCollection([
        turf.point([121.59849, 25.056317]), //南港區
        turf.point([121.561759, 24.991364]), //文山區
        turf.point([121.491618, 25.036715]), //萬華區
        turf.point([121.507228, 25.068025]), //大同區
        turf.point([121.516565, 25.046058]), //中正區
        turf.point([121.525346, 25.06626]), //中山區
        turf.point([121.526401, 25.028247]), //大安區
        turf.point([121.558742, 25.035095]), //信義區
        turf.point([121.568983, 25.051608]), //松山區
        turf.point([121.494596, 25.134133]), //北投區
        turf.point([121.511458, 25.094612]), //士林區
        turf.point([121.58069, 25.071182]) //內湖區
    ]);

    var nearest = turf.nearestPoint(targetPoint, points);
    //console.log(nearest);

    const findWeatherPoint = weatherInfo?.location?.filter((loc, index) => {
        if (loc[index] == nearest.properties.featureIndex) {
            return loc;
        }
    })

    //if (isSuccess) console.log(findWeatherPoint);

    return (
        <>
            {
                isLoading || isError || !isSuccess ?
                    <HStack>
                        <Center w={"100%"} mt={10}>
                            <Box bg={blockMode} h={150} w={"90%"} borderRadius={17}>
                                <HStack h={"100%"} justifyContent="center" alignItems="center">
                                    <Center>
                                        <Text>
                                            天氣資訊載入中...
                                        </Text>
                                    </Center>
                                </HStack>
                            </Box>
                        </Center>
                    </HStack> :
                    <HStack>
                        <Center w={"100%"} mt={10}>
                            <Box bg={blockMode} h={150} w={"90%"} borderRadius={17}>
                                <HStack h={"100%"} justifyContent="center" alignItems="center">
                                    <HStack mr={25} h={70} justifyContent="center" alignItems="center">
                                        <MaterialCommunityIcons name="weather-partly-cloudy" size={70} color={"#F29D38"} />
                                    </HStack>
                                    <VStack>
                                        <Text fontWeight="bold" fontSize={20} pb={5} color={textMode}>
                                            大安區123456
                                        </Text>
                                        <Text pb={2} color={textMode}>
                                            晴時有雲
                                        </Text>
                                        <Text pb={10} color={textMode}>
                                            30°C
                                        </Text>
                                        <HStack>
                                            <MaterialCommunityIcons name="weather-pouring" size={22} color={"#F29D38"} />
                                            <Text pl={3} pb={5} color={textMode}>
                                                降雨機率：5%
                                            </Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                            </Box>
                        </Center>
                    </HStack>
            }
        </>
    );
};