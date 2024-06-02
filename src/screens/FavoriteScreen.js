import React from "react";
import { View, TextInput, ScrollView, StyleSheet, TouchableOpacity, useColorScheme, Dimensions } from "react-native";
import { Center, Box, VStack, HStack, Image, Text, Pressable, Input, InputField, Actionsheet } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Platform } from "react-native";
import * as Location from 'expo-location';
import * as Device from "expo-device";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useUbikeInfo } from '../tanstack-query';
import ActionButton from '../components/ActionButton';
import ActionScreen from './ActionScreen';

import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/slice";

import lightMap from "../mapStyle_json/lightMode.json"
import darkMap from "../mapStyle_json/darkMode.json"

import Animated, {
  useSharedValue,
  FadeIn,
  FadeOut,
  BounceOut,
  Layout,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';


import { PanGestureHandler } from "react-native-gesture-handler";

import { store, useGlobalState,createState } from 'state-pool';
const favorite = createState([
  {
    id: 0,
    stationID: 0,
    station: "點擊地圖站點以增加最愛站點項目",
    longitude: 0,
    latitude: 0
  },
  {
    id: 1,
    stationID: 0,
    station: "最愛項目數量以10個為限",
    longitude: 0,
    latitude: 0
  }
]);

const AnimatedBox = Animated.createAnimatedComponent(Box);


const Favorite = () => {
  const colorScheme = useColorScheme();
  const initialMode = useSharedValue(true);
  const height = (Dimensions.get('window').height);


  const { navigate } = useNavigation();
  const [msg, setMsg] = useState("Waiting...");
  const [onCurrentLocation, setOnCurrentLocation] = useState(false);
  const [zoomRatio, setZoomRatio] = useState(1);

  const { data, isSuccess } = useUbikeInfo();
  const [screenSites, setScreenSites] = useState([]);

  const [region, setRegion] = useState({
    longitude: 121.544637,
    latitude: 25.024624,
    longitudeDelta: 0.002,
    latitudeDelta: 0.004,
  })

  const [marker, setMarker] = useState({
    coord: {
      longitude: 121.544637,
      latitude: 25.024624,
    }
  });

  const setRegionAndMarker = (location) => {
    setRegion({
      ...region,
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
    setMarker({
      ...marker,
      coord: {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      },
    });
    setScreenSites(screenSite);
  };

  const onRegionChangeComplete = (rgn) => {
    setOnCurrentLocation(false);
    if (
      Math.abs(rgn.latitude - region.latitude) > 0.0004 ||
      Math.abs(rgn.longitude - region.longitude) > 0.0004
    ) {
      setRegion(rgn);
    }
    if (rgn.longitudeDelta > 0.02)
      setZoomRatio(0.02 / rgn.longitudeDelta);
    else
      setZoomRatio(1);
  }

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setMsg('Permission to access location was denied');
      return;
    }
    //let location = await Location.getCurrentPositionAsync({});

    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        distanceInterval: 2000,
        timeInterval: 1000,
      },
      (loc) => setRegionAndMarker(loc)
    );

    // setRegionAndMarker(location);
    setOnCurrentLocation(true);
  }

  useEffect(() => {
    getLocation();
  }, []);

  const screenSite = isSuccess && data.filter((site) => {
    if (Math.abs(site.latitude - region.latitude) < 0.005 &&
      Math.abs(site.longitude - region.longitude) < 0.005) {
      return site;
    }
  })

  const handleClose = (site) => {

    // console.log(site);
    if (items.length <= 10) {
      setItems([...items, {
        id: items[items.length - 1]?.id >= 0
          ? (items[items.length - 1].id + 1)
          : 0,
        stationID: site.sno,
        station: site.sna,
        longitude: site.longitude,
        latitude: site.latitude
      }])
    } else {
      alert(`僅能收藏最多10個最愛站點
若想增加其他站點，請點選最愛清單右側的刪除鈕`)
    }

  }

  useEffect(() => {
    initialMode.value = false;
    getLocation();
  }, []);

  const [items, setItems] = favorite.useState();

  const favLocation = (lon, lat) => {
    if (lon != 0 && lat != 0) {
      setRegion({
        ...region,
        longitude: lon,
        latitude: lat,
      });
    }
  }

  const onDelete = (itemId) => {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id !== itemId);
    });
  };

  const colorMode = useSelector(selectColorMode);
  const textMode = colorMode == "light" ? "#000" : "#E2DDDD";
  const blockMode = colorMode == "light" ? "#FAFAFA" : "#474747";

  const bikepic = (site) => {
    return (
      <Marker
        coordinate={{
          latitude: site.latitude,
          longitude: site.longitude,
        }}
        key={site.sno}
        title={`${site.sna} ${site.available_rent_bikes}/${site.available_return_bikes}`}
        description={site.ar}
        onPress={() => handleClose(site)}
      >
        <ActionButton
          zoomRatio={zoomRatio}
          site={site}
          red={false} />
      </Marker>
    )
  }
  const lovebikepic = (site) => {
    return (
      <Marker
        coordinate={{
          latitude: site.latitude,
          longitude: site.longitude,
        }}
        key={site.sno}
        title={`${site.sna} ${site.available_rent_bikes}/${site.available_return_bikes}`}
        description={site.ar}
        onPress={() => handleClose(site)}
      >
        <ActionButton
          zoomRatio={zoomRatio}
          site={site}
          red={true} />
      </Marker>
    )
  }

  return (
    <ScrollView style={{ flex: 1, height: "100%" }} >

      <Box flex={1} h={"100%"} w={"100%"}>
        <MapView
          initialRegion={region}
          style={{ height: 350, width: "100%" }}
          onRegionChangeComplete={onRegionChangeComplete}
          customMapStyle={colorMode == "light" ? lightMap : darkMap}
          region={region}
        >
          <Marker
            coordinate={marker.coord}
          >
            <Icon name={"map-marker"} size={60} color="#B12A5B" />
          </Marker>
          {
            (zoomRatio > 0.14) && screenSites.map((site) => {
              let s;
              let f;
              for (let index = 0; index < items.length; index++) {
                if (items[index].stationID != site.sno) {
                  s = site;
                } else {
                  f = site;
                  return lovebikepic(f);
                }
              }
              if (s) return bikepic(s);
              else return bikepic(site);

            })
          }

        </MapView>

        {!onCurrentLocation && (
          <Box
            bg="white"
            borderRadius={60}
            h={60}
            w={60}
            position="absolute"
            shadow="2"
            zIndex={99}
            right={5}
            bottom={70}
            pt={4}
            opacity={0.8}
          >
            <Center>
              <TouchableOpacity onPress={() => getLocation()}>
                <Ionicons name={"locate-outline"}
                  size={50}
                  color="#F29D38"
                />
              </TouchableOpacity>
            </Center>

          </Box>

        )}
      </Box>

      <Box bg={colorMode == "light" ? "#FFE27B" : "#2E251B"} h={height}>
        <VStack w={"100%"} mt={20}>

          {items.map((item, index) => {
            return (

              <AnimatedBox
                key={item.id}
                entering={
                  initialMode.value ? FadeIn.delay(100 * index) : FadeIn
                }
                exiting={BounceOut}
                layout={Layout.delay(800)}
                // onTouchEnd={() => onDelete(item.id)}
                h={70}
                w="90%"
                bg={blockMode}
                my={3}
                borderRadius={20}
                alignSelf='center'
                justifyContent='center'
                alignItems='center'
                shadow="4"
              >
                <Box h={"100%"} w={"80%"}>
                  <Center flex={1}>
                    <HStack alignItems="center">

                      <MaterialCommunityIcons name="heart" size={40} color={"red"} />
                      <Box w={"90%"} pr={10} pl={10}>
                        <TouchableOpacity onPress={() => favLocation(item.longitude, item.latitude)}>
                          <Text color={textMode} fontSize={20} fontWeight="200" textAlign="center">
                            {item.station}
                          </Text>
                        </TouchableOpacity>
                      </Box>

                      <TouchableOpacity onPress={() => onDelete(item.id)}>
                        <MaterialCommunityIcons name="cancel" size={40} color={"black"} />
                      </TouchableOpacity>
                    </HStack>
                  </Center>
                </Box>
              </AnimatedBox>
            );
          })}

        </VStack>
      </Box>
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
    marginTop: 5,
    fontSize: 15,
  },
  magnify: {
    marginTop: -30,
    marginLeft: '80%'
  }
})

export default Favorite;
