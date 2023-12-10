import { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';
//custom imports
import { fetchWeatherData } from '../../redux/slices/weatherSlice';
import colors from "../../constants/colors";
import styles from "./styles";

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const isLoading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);
  const user = useSelector((state) => state.user.info);

  useEffect(() => {
    setLoading(true);
    getCurrentLocation()
  }, [])
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLoading(false);
    const { latitude, longitude } = location.coords;
    dispatch(fetchWeatherData({ latitude, longitude }));
  }
  const dateConversion = (date) => {
    const originalDate = new Date(date);
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = formatter.format(originalDate);
    return formattedDate

  }
  return (
    <>
      {isLoading || weatherData == null ?
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={colors.primary} />
        </View>
        :
        <>
          {error ?
            <View style={styles.loadingContainer}>
              <ActivityIndicator size={'large'} color={colors.primary} />
            </View>
            :
            <View style={styles.container}>
              <Text
              numberOfLines={1}
              ellipsizeMode='tail'
                style={styles.userName}>Welcome {user.name}</Text>
              <View style={styles.infoContainer}>
                <View style={styles.infoContainer.view}>
                  <Text
                    style={styles.infoContainer.weatherName}
                  >
                    {weatherData.current.condition.text}
                  </Text>
                  <Text style={styles.infoContainer.weatherLoc}>
                    {weatherData.location.name}, {weatherData.location.country}
                  </Text>
                  <Text style={styles.infoContainer.info}>
                    feels like  {weatherData.current.feelslike_c}
                  </Text>
                  <Text style={styles.infoContainer.info}>
                    {dateConversion(weatherData.location.localtime)}
                  </Text>
                </View>
                <View style={styles.weatherImage}>
                  <Image
                    source={{
                      uri: `https:${weatherData.current.condition.icon}`,
                    }}
                    style={{ width: 100, height: 100 }}
                  />
                </View>
              </View>
              <View style={styles.weatherContainer}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.weatherContainer.weather}>
                  {weatherData.current.temp_c}
                </Text>
                <View style={{ marginTop: 20 }}>
                  <View style={styles.weatherContainer.dot} /></View>
              </View>
              <View style={styles.detailContainer}>
                <View style={styles.detailContainer.view}>
                  <View style={styles.detailContainer.textView}>
                    <Text style={styles.detailContainer.textTitle}>
                      Precipitation
                    </Text>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.detailContainer.text}>
                      {weatherData.current.precip_mm}%
                    </Text>
                  </View>
                  <View style={styles.detailContainer.textView}>
                    <Text style={styles.detailContainer.textTitle}>
                      Wind
                    </Text>
                    <Text style={styles.detailContainer.text}>{weatherData.current.wind_kph}%</Text>
                  </View>
                </View>
                <View style={styles.detailContainer.view}>
                  <View style={styles.detailContainer.textView}>
                    <Text style={styles.detailContainer.textTitle}>
                      Humidity
                    </Text>
                    <Text numberOfLines={0.5} ellipsizeMode="tail" style={styles.detailContainer.text}>
                      {weatherData.current.humidity}%
                    </Text>
                  </View>
                  <View style={styles.detailContainer.textView}>
                    <Text style={styles.detailContainer.textTitle}>
                      Pressure
                    </Text>
                    <Text style={styles.detailContainer.text}>
                      {weatherData.current.pressure_in}%
                    </Text>
                  </View>
                </View>

              </View>
            </View>
          }
        </>
      }
    </>
  );
};
export default Weather;
