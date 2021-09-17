import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#314755', '#26a0da'],
    title: 'За окном падает дождь!',
    subtitle: 'Это значит, что скоро будет радуга :)',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#076585', '#fff'],
    title: 'Облачка',
    subtitle: 'Белогривые лошадки',
  },
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#948e99', '#2e1437'],
    title: 'Сидите дома и обнимайте котика!',
    subtitle: 'Вы видите что на улице?',
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#606c88', '#3f4c6b'],
    title: 'Захвати дождевик',
    subtitle: 'Возможно дождик усилится...',
  },
  Snow: {
    iconName: 'snowflake',
    gradient: ['#2980b9', '#6dd5fa'],
    title: 'На улице снежок!',
    subtitle: 'Одевайтесь потеплее и скорее идите лепить снеговика :)',
  },
  Dust: {
    iconName: 'weather-windy-variant',
    gradient: ['#4ecdc4', '#556270'],
    title: 'Пыльно..',
    subtitle: 'Советуем закрыть окна.',
  },
  Smoke: {
    iconName: 'weather-windy',
    gradient: ['#536976', '#292E49'],
    title: 'На улице смог :( ',
    subtitle: 'Советуем не покидать дом без необходимости (или же сменить место жительства)',
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#616161', '#9bc5c3'],
    title: 'На улице снежок!',
    subtitle: 'Одевайтесь потеплее и идите пить глинтвейн (безалк конечно же)',
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#304352', '#d7d2cc'],
    title: 'Ни черта не видно в тумане',
    subtitle: 'Это как в Сайлент-Хилле :)',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#cac531', '#F3F9A7'],
    title: 'Погодка супер :)',
    subtitle: 'Идите гулять, хватит сидеть дома!',
  },
}

export default function Weather({ temp, condition }) {
  return (

    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: 'left',
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    textAlign: 'left',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});
