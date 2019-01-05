// index.js - place code in here for IOS!!!!

// import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
// Create a component

const App = () => <Header />;// it is self closing;

// Render it to device
AppRegistry.registerComponent('albums', () => App);
