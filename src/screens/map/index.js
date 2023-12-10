import React, { useState } from "react";
import { View, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import Modal from 'react-native-modal';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
//custom imports
import { fetchWeatherData } from '../../redux/slices/weatherSlice';
import colors from "../../constants/colors";
import styles from "./styles";
import { Alert } from "react-native";

const Map = () => {
  const [markerCoords, setMarkerCoords] = useState(null);
  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const isLoading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setMarkerCoords(coordinate);
    setVisible(true)
  };

  const setWeatherLocation = () => {
    dispatch(fetchWeatherData(markerCoords));
    setVisible(false);
    Alert.alert('Weather location updated');
  }

  return (
    <View style={styles.container}>
      {isLoading ?
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={{ flex: 1, justifyContent: "center" }}
        />
        :
        <MapView
          zoomEnabled={true}
          zoomControlEnabled={true}
          scrollEnabled={true}
          style={styles.map}
          initialRegion={{
            latitude: weatherData ? weatherData.location.lat : 31.520370,
            longitude: weatherData ? weatherData.location.lon : 74.358749,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          onPress={handleMapPress}
        >
          {markerCoords && (
            <Marker
              coordinate={markerCoords}
            />
          )}
        </MapView>
      }
      <Modal isVisible={visible}>
        <View style={styles.centeredView}>
          <Text style={styles.modalText}> Do you want to set the weather for this location?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonTouch} onPress={() => setVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTouch}
              onPress={() => {
                setWeatherLocation();
              }}
            >
              <Text style={styles.buttonText}>Set Weather</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Map;
