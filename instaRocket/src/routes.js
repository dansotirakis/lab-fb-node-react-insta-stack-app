import React from 'react';
import {createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator} from 'react-navigation';
import {Image} from 'react-native';


import Feed from './pages/feed';
import New from './pages/new';
import logo from './assets/logo.png';

export default createAppContainer(
    
    // Componente cabeçalho global
    createStackNavigator({
        Feed,
        New,
    }, {
        initialRouteName: 'New',
        defaultNavigationOptions: {
            headerTitle: <Image style={{ marginHorizontal:  100 }} source={logo}/>,
            headerBackTitle: null,
        },
        mode: 'modal'
    })

    // Componente buttons (bottom) global
    /* createBottomTabNavigator({
        Feed,
        New,
    }) */

    // Componente swith global
    /* createSwitchNavigator({
        Feed,
        New,
    }), */

    // Componente drawer (menu lateral retrátil) global
    /* createDrawerNavigator({
        Feed,
        New,
    }), */
);