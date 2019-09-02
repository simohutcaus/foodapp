import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import {Ionicons } from '@expo/vector-icons';


const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
});


const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
    }
  }},
  Favorites: {screen: FavoritesScreen, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
    }
  }}
}, {
  tabBarOptions: {
    activeTintColor: Colors.accent
  }
});


 
export default createAppContainer(MealsFavTabNavigator);