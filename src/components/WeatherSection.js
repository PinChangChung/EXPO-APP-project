import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, RefreshControl } from "react-native";
import { Center, Box, VStack, HStack, Text } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useWeatherInfo } from '../tanstack-query';
import { getWeatherInfo } from "../api/testWeather"

import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/slice";

import test from "../mapStyle_json/test.json"

import * as turf from '@turf/turf';


export default ({ position }) => {

    const colorMode = useSelector(selectColorMode);
    const textMode = colorMode == "light" ? "#000" : "#E2DDDD";
    const blockMode = colorMode == "light" ? "#FAFAFA" : "#474747";

    //const { data, isLoading, isSuccess, isError } = useWeatherInfo();


    const [weatherData, setWeatherData] = useState({});
    const getWeatherData = async () => {
        const weatherdata = await getWeatherInfo();
        //console.log(weatherdata);
        const weatherParse = JSON.parse(weatherdata);
        let findWeatherPoint = [];
        findWeatherPoint = weatherParse?.records?.locations[0]?.location.find((loc) => {
            if (loc.lat == nearest?.geometry?.coordinates[1] && loc.lon == nearest?.geometry?.coordinates[0]) {
                //console.log(loc);
                return loc;
            }
        })
        setWeatherData(findWeatherPoint);
        console.log(weatherData.weatherElement[0].time[0]);
    }

    useEffect(() => {
        getWeatherData();
    }, [])
    console.log("進入天氣區域");
    //console.log(data?.records?.locations[0]);


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

    const getWeatherDescription = () => {
        try {
            const weatherDescription = JSON.stringify(weatherData?.weatherElement[0]?.time[0]?.elementValue[0]?.value)
            let check = false;
            for (let i = 0; i < weatherDescription?.length && check == false; i++) {
                if (weatherDescription[i] == "。") {
                    const Description = weatherDescription?.slice(1, i);
                    check = true;
                    return Description;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getWeatherTempDescription = () => {
        try {
            const weatherDescription = JSON.stringify(weatherData?.weatherElement[0]?.time[0]?.elementValue[0]?.value)
            let check = 1;
            for (let i = 0; i < weatherDescription?.length && check <= 4; i++) {
                if (weatherDescription[i] == "。") {
                    check++;
                    if (check == 4) {
                        const Description = weatherDescription?.slice(i - 7, i);
                        return Description;
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getWeatherRainDescription = () => {
        try {
            const weatherDescription = JSON.stringify(weatherData?.weatherElement[0]?.time[0]?.elementValue[0]?.value)
            let check = 1;
            for (let i = 0; i < weatherDescription?.length && check <= 3; i++) {
                if (weatherDescription[i] == "。") {
                    check++;
                    if (check == 3) {
                        const Description = weatherDescription?.slice(i - 8, i);
                        return Description;
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const weatherIcon = () => {
        let icon = "";
        switch (getWeatherDescription()) {
            case "陰":
                icon = "weather-cloudy";
                break;
            case "午後短暫陣雨":
                icon = "weather-partly-rainy";
                break;
            case "多雲":
                icon = "cloud";
                break;
            case "晴":
                icon = "weather-sunny";
                break;
            case "午後短暫雷陣雨":
                icon = "weather-partly-lightning";
                break;
            case "短暫陣雨或雷雨":
                icon = "weather-lightning-rainy";
                break;

            default:
                icon = "help";
                break;
        }
        return icon;
    }
    return (
        <>
            {
                <HStack>
                    <Center w={"100%"} mt={10}>
                        <Box bg={blockMode} h={150} w={"90%"} borderRadius={17}>
                            <HStack h={"100%"} justifyContent="center" alignItems="center">
                                <HStack mr={25} h={70} justifyContent="center" alignItems="center">
                                    <MaterialCommunityIcons name={weatherIcon()} size={70} color={"#F29D38"} />
                                </HStack>
                                <VStack>
                                    <Text fontWeight="bold" fontSize={20} pb={5} color={textMode}>
                                        {weatherData?.locationName ? JSON.stringify(weatherData?.locationName) : "---"}
                                    </Text>
                                    <Text pb={2} color={textMode}>
                                        {weatherData?.locationName ? getWeatherDescription() : "---"}
                                    </Text>
                                    <Text pb={10} color={textMode}>
                                        {weatherData?.locationName ? getWeatherTempDescription() : "---"}
                                    </Text>
                                    <HStack>
                                        <MaterialCommunityIcons name="weather-pouring" size={22} color={"#F29D38"} />
                                        <Text pl={10} pb={5} color={textMode}>
                                            {weatherData?.locationName ? getWeatherRainDescription() : "---"}
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