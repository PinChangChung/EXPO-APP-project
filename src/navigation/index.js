import React, { useState } from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { Divider, VStack, Text } from "@gluestack-ui/themed";

import { StatusBar, Pressable, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import Favorite from '../screens/FavoriteScreen';
import Map from '../screens/MapScreen';
import Route from '../screens/RouteScreen';
import Nearby from '../screens/NearbyScreen';
import Account from '../screens/AccountPages';
import Setting from '../screens/SettingPages'

import NullScreen from '../screens/NullScreen';
import TabMap from '../components/TabMap';

import MyTheme from '../theme';

import { selectGeneral } from "../redux/slice";
import { useSelector } from "react-redux";
import { selectHasLogin } from '../redux/slice';
import { selectColorMode } from "../redux/slice";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {
  const colorMode = useSelector(selectColorMode);
  const headerMode = colorMode == "light" ? "#FFE27B" : "#2E251B";
  const textMode = colorMode == "light" ? "#000" : "#E2DDDD";

  const accountInfo = useSelector(selectGeneral);
  const login = useSelector(selectHasLogin);
  const defaultName = (accountInfo.name == "" || login == false) ? "使用者" : accountInfo.name;

  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 0 }}
      style={{ backgroundColor: headerMode }}
    >
      <VStack pl={20} pt={130}>
        <MaterialCommunityIcons name="account-circle" size={50} />
        <Text color={textMode} style={{ fontFamily: "Roboto", fontSize: 24, fontWeight: "bold" }}>{defaultName}</Text>
      </VStack>
      <Divider my="$2" bg='#979797' w={"80%"} ml={20} mt={20}/>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const { colors } = useTheme();
  const colorMode = useSelector(selectColorMode);
  const headerMode = colorMode == "light" ? "#FFE27B" : "#2E251B";
  const textMode = colorMode == "light" ? "#000" : "#E2DDDD";

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ navigation }) => ({
        drawerActiveBackgroundColor: colors.primary100,
        drawerActiveTintColor: colors.primary700,
        drawerInactiveTintColor: colors.light400,
        drawerStyle: { width: 200 },
        drawerLabelStyle: { fontSize: 18, fontWeight: '400' },
        headerLeft: props =>
          <MaterialCommunityIcons
            name={'menu'}
            size={30}
            style={{ marginRight: 20, marginLeft: 20 }}
            color={'#F29D38'}
            onPress={navigation.toggleDrawer} />
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={MyTabs}
        options={{
          headerShown: false,
          drawerLabel: "首頁",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="附近站點"
        component={Nearby}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: headerMode,
          },
          headerTitleStyle: {
            color: textMode
          },
          headerLeftLabelVisible: false,
          drawerLabel: "附近站點",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="最愛站點"
        component={Favorite}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: headerMode
          },
          headerTitleStyle: {
            color: textMode
          },
          drawerLabel: "最愛站點",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="站點地圖"
        component={Map}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: headerMode
          },
          headerTitleStyle: {
            color: textMode
          },
          drawerLabel: "站點地圖",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="騎乘路線"
        component={Route}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: headerMode
          },
          headerTitleStyle: {
            color: textMode
          },
          drawerLabel: "騎乘路線",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="bicycle" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="setting"
        component={Setting}
        options={{
          headerShown: false,
          drawerLabel: "設定",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={24} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const MyTabs = () => {
  const { colors } = useTheme();

  const colorMode = useSelector(selectColorMode);
  const tabMode = colorMode == "light" ? "#fff" : "#474747";


  return (
    <Tab.Navigator
      initialRouteName="TabHomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colors.light400,
        tabBarActiveTintColor: colors.primary700,
        tabBarStyle: {
          backgroundColor: tabMode,
          height: 65,
        },
        tabBarLabelStyle: {
          fontSize: 18,
          marginTop: -5,
          marginBottom: 5
        }
      }}
    >
      <Tab.Screen
        name="TabHomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "首頁",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="TabMap"
        component={NullScreen}
        options={{
          headerShown: false,
          tabBarButton: () => <TabMap />
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={Account}
        options={{
          headerShown: false,
          title: "帳戶",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = ({ navigation }) => {

  const colorMode = useSelector(selectColorMode);
  const headerMode = colorMode == "light" ? "#FFE27B" : "#2E251B";
  const textMode = colorMode == "light" ? "#000" : "#E2DDDD";


  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: headerMode
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "U百科",
          headerTintColor: textMode,
          headerTitleStyle: {
            fontSize: 18
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={30}
              color={'#F29D38'}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Near"
        component={Nearby}
        options={
          ({ navigation }) => (
            {
              title: "   附近站點",
              headerTintColor: textMode,
              headerTitleStyle: {
                fontSize: 15
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <MaterialCommunityIcons
                    name={'chevron-left'}
                    size={30}
                    color={'#F29D38'}
                  />
                </Pressable>
              )
            }
          )
        }
      />
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={
          ({ navigation }) => (
            {
              title: "   最愛站點",
              headerTintColor: textMode,
              headerTitleStyle: {
                fontSize: 15
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <MaterialCommunityIcons
                    name={'chevron-left'}
                    size={30}
                    color={'#F29D38'}
                  />
                </Pressable>
              )
            }
          )
        }
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={
          ({ navigation }) => (
            {
              title: "   站點地圖",
              headerTintColor: textMode,
              headerTitleStyle: {
                fontSize: 15
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <MaterialCommunityIcons
                    name={'chevron-left'}
                    size={30}
                    color={'#F29D38'}
                  />
                </Pressable>
              )
            }
          )
        }
      />
      <Stack.Screen
        name="Route"
        component={Route}
        options={
          ({ navigation }) => (
            {
              title: "   騎乘路線",
              headerTintColor: textMode,
              headerTitleStyle: {
                fontSize: 15
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <MaterialCommunityIcons
                    name={'chevron-left'}
                    size={30}
                    color={'#F29D38'}
                  />
                </Pressable>
              )
            }
          )
        }
      />
    </Stack.Navigator>
  );
}


export default Navigation;