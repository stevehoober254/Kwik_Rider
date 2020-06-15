/**
 * @format
 * @flow
 */
import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button } from '@ui-kitten/components';
import Styles from './styles';
import Theme, { primaryBlue } from '../../../constant/theme';
import MapViewDirections from 'react-native-maps-directions';
import { dashboard } from '../../../constant/path';

const MenuIcon = '../../../assets/images/menu.png';

const origin = { latitude: -1.292682, longitude: 36.737547 };
const destination = { latitude: -1.282930, longitude: 36.736873 };

type Props = {
  navigation: any;
};

const MapPage: FC<Props> = ({ navigation }) => {
  const navigateTo = (routeName: string) => {
    navigation.navigate(routeName, {});
  };

  const driveRoutes = () => {
    return (
      <MapViewDirections
        origin={origin}
        destination={destination}
        strokeWidth={3}
        strokeColor={primaryBlue}
        apikey={''}
      />
    );
  };

  return (
    <View style={Styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={Styles.map}
        region={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      >
        <Marker
          coordinate={{ latitude: -1.283027, longitude: 36.736894 }}
          title={'Kidali A. Kevin'}
          description={'Naivas Supermarket'}
        />
        {driveRoutes()}
      </MapView>
      <View style={Styles.floatMenuBar}>
        <TouchableOpacity onPress={() => navigateTo(dashboard)}>
          <Image source={require(MenuIcon)} style={Styles.iconMenu} />
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomSection}>
        <View style={Styles.buttonWrapper}>
          <Button
            textStyle={{ ...Theme.buttonTheme, fontSize: 10 }}
            style={Styles.btn}
            size="small"
          >
            Start trip
          </Button>
        </View>
        <View style={Styles.contentWrapper}>
          <Text>
            <Text style={Styles.fromTo}>From: Naivas Supermarket</Text>
          </Text>
          <Text>
            <Text style={Styles.fromTo}>To: </Text> Yaya Centre, Mall
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MapPage;
