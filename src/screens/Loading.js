import React from "react";
import Navigation from "../navigation";
import { Image, Center, Text } from "@gluestack-ui/themed";

import { useUbikeInfo } from '../tanstack-query';
import iconImg from "../../midterm_img/icon-new.png"

const Loading = () => {
    const { isLoading } = useUbikeInfo();
    const icon = iconImg;

    return (
        <>
            {
                isLoading ?
                    <Center flex={1} h={"100%"} bg="#ebad00">
                        <Image source={icon} alt="loading-icon" />
                        <Text mt={10} color="#fff">
                            正在加載站點資料...
                        </Text>
                    </Center>
                    : <Navigation />
            }
        </>
    )
};


export default Loading;
