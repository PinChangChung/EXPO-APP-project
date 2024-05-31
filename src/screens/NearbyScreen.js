import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { Platform } from "react-native";
import { Box, Center, Pressable, Text } from '@gluestack-ui/themed';
import * as Location from 'expo-location';
import * as Device from "expo-device";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useUbikeInfo } from '../tanstack-query';
import ActionButton from '../components/ActionButton';
import ActionScreen from './ActionScreen';
import { Actionsheet } from "@gluestack-ui/themed";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/slice";

import lightMap from "../mapStyle_json/lightMode.json"
import darkMap from "../mapStyle_json/darkMode.json"


export default function MapScreen() {


  const { data, isSuccess } = useUbikeInfo();

  const [showActionsheet, setShowActionsheet] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState([]);

  const handleClose = (site) => {
    setShowActionsheet(!showActionsheet);
    setSelectedMarker(site);
    // console.log(site);
  }

  const [msg, setMsg] = useState("Waiting...");
  const [onCurrentLocation, setOnCurrentLocation] = useState(false);
  const [zoomRatio, setZoomRatio] = useState(1);

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

  const screenSite = data.filter((site) => {
    if (Math.abs(site.latitude - region.latitude) < 0.003 &&
      Math.abs(site.longitude - region.longitude) < 0.003) {
      return site;
    }
  })


  const colorMode = useSelector(selectColorMode);
  const textMode = colorMode == "light" ? "#000" : "#E2DDDD";
  const blockMode = colorMode == "light" ? "#FAFAFA" : "#474747";

  return (
    <Box flex={1}>
      <MapView
        initialRegion={region}
        style={{ width: "100%", height: "75%" }}
        onRegionChangeComplete={onRegionChangeComplete}
        customMapStyle={colorMode == "light" ? lightMap : darkMap}
        region={region}
      >
        <Marker
          coordinate={marker.coord}
          title={marker.name}
          description={marker.address}
        >
          <Icon name={"map-marker"} size={60} color="#B12A5B" />
        </Marker>
        {(zoomRatio > 0.14) && screenSites.map((site) => (
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
            <ActionButton zoomRatio={zoomRatio} site={site} />
          </Marker>
        ))}

      </MapView>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose} closeOnOverlayClick={true}>
        <ActionScreen handleClose={handleClose} selectedMarker={selectedMarker} />
      </Actionsheet>

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
          bottom={180}
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
      <Center h={"25%"} bg={colorMode == "light" ? "#FFE27B" : "#2E251B"}>
        <Box style={styles.bar} bg={blockMode}>
          <Box className="rounded-full">
            <Box h={"100%"} justifyContent="center" >
              <Center>
                <Text color={textMode}>
                  本頁面會顯示目前您周遭300m之內的站點位置
                </Text>
              </Center>
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: "90%",
    width: '90%',
    borderRadius: 30,
    marginBottom: 6,
    marginTop: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 1.5,
    elevation: 4,
  },
  searchtext: {
    marginLeft: 15,
    marginTop: 0,
    fontSize: 15,
  },
  tiptext: {
    marginLeft: 0,
    marginTop: 17,
    fontSize: 13,
    color: "#B76E18",
  },
  loginAction: {
    height: 47,
    width: '80%',
    backgroundColor: '#F29D38',
    borderRadius: 50,
    marginBottom: 13,
    marginTop: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 1.5,
    elevation: 4,
  }
})