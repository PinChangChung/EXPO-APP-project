import React from "react";
import Navigation from "../navigation";
import { Image, Center, Text } from "@gluestack-ui/themed";
import { View, StyleSheet } from "react-native";
import { useUbikeInfo } from '../tanstack-query';
import iconImg from "../../midterm_img/icon-new.png"
import LottieView from "lottie-react-native";

const Loading = () => {
    const { isLoading, isSuccess } = useUbikeInfo();
    const icon = iconImg;

    return (
        <>
            {console.log("進入站點載入畫面")}
            {
                isLoading || !isSuccess ?
                    <Center flex={1} h={"100%"} bg="#ebad00">
                        {/* <Image source={icon} alt="loading-icon" /> */}

                        <Center >
                            <View style={styles.bike}>
                                <LottieView style={{ flex: 1 }} source={require("../json/bike.json")} speed={3.5} autoPlay loop />
                            </View>
                            <Text mt={10} color="#fff">
                                正在加載站點資料...
                            </Text>
                        </Center>

                    </Center>
                    : <Navigation />
            }
        </>
    )
};

const styles = StyleSheet.create({
    bike: {
        height: 100,
        aspectRatio: 3
    }
})

export default Loading;