import React, { useState } from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { Divider, VStack } from "@gluestack-ui/themed";

import { Text, StatusBar, Pressable, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import Favorite from '../screens/Favorite';
import Map from '../screens/Map';
import Route from '../screens/Route';
import Nearby from '../screens/Nearby';
import Account from '../screens/AccountScreen';

import MyTheme from '../theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Test = () => null;



const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 0 }}
      style={{ backgroundColor: "#FFE27B" }}
    >
      <VStack pl={20} pt={130}>
        <MaterialCommunityIcons name="account-circle" size={50} />
        <Text style={{ fontFamily: "Roboto", fontSize: 24, fontWeight: "bold" }}>Thomas</Text>
      </VStack>
      <Divider my="$2" />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        drawerActiveBackgroundColor: colors.primary100,
        drawerActiveTintColor: colors.primary700,
        drawerInactiveTintColor: colors.light500,
        drawerStyle: { width: 200 },
        drawerLabelStyle: { fontSize: 18, fontWeight: '400' },
      }}
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
        name="Setting"
        component={Test}
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

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colors.light400,
        tabBarActiveTintColor: colors.primary700,
        tabBarStyle: {
          backgroundColor: "#fff"
        }
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "首頁",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 80
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={Account}
        options={{
          headerShown: false,
          title: "帳戶",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 50
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Wishlist = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Header />
        <MaterialCommunityIcons
          name={'menu'}
          size={20}
          onPress={() => navigation.openDrawer()}
          style={{ marginRight: 20, position: "relative", top: -40, left: 18 }}
        />
        <Text style={{ textAlign: "center", lineHeight: 100 }}>
          Wishlist
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const MyBooks = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Header />
        <MaterialCommunityIcons
          name={'menu'}
          size={20}
          onPress={() => navigation.openDrawer()}
          style={{ marginRight: 20, position: "relative", top: -40, left: 18 }}
        />
        <Text style={{ textAlign: "center", lineHeight: 100 }}>
          MyBooks
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const HomeStack = ({ navigation }) => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#FFE27B"
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "U百科",
          headerTintColor: '#000',
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
              headerTintColor: '#000',
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
              headerTintColor: '#000',
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
              headerTintColor: '#000',
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
              headerTintColor: '#000',
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