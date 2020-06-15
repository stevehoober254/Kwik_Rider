/**
 * @format
 * @flow
 */
import React, { FC, useEffect } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Card, Input, Text } from '@ui-kitten/components';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { defaultTitleFont } from '../../../constant/theme';
import Styles from './styles';
import { connect } from 'react-redux';
import { getTrips } from '../../../store/actions/trips';
import { Trips, TripState, TripStatus } from '../../../models';

const URL = '../../../assets/images/clock.png';

type Props = {
  getData: () => void;
  data: TripState;
};

const TripsPage: FC<Props> = ({ data, getData }) => {
  const [value, setValue] = React.useState('');
  const { trips } = data;

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <ScrollView>
      <Card>
        <Grid>
          <Row>
            <Col>
              <View>
                <Input
                  placeholder="Search trip"
                  value={value}
                  textStyle={{ fontFamily: defaultTitleFont }}
                  onChangeText={setValue}
                />
              </View>

              {trips &&
                trips.map((trip: Trips) => (
                  <TouchableOpacity key={trip.uuid} onPress={() => {}}>
                    <View
                      style={
                        trip.status === TripStatus.IN_PROGRESS
                          ? { ...Styles.listItem, ...Styles.activeTrips }
                          : Styles.listItem
                      }
                    >
                      <View style={Styles.imageProfileContainer}>
                        <Image
                          style={Styles.imageProfile}
                          source={require(URL)}
                        />
                      </View>
                      <View style={Styles.profileDesc}>
                        <View>
                          <Text style={Styles.title}>
                            <Text style={Styles.to}>From: </Text>: {trip.from}
                          </Text>
                          <Text style={Styles.title}>
                            <Text style={Styles.to}>To: </Text>: {trip.to}
                          </Text>
                        </View>
                      </View>
                      <View style={Styles.time}>
                        <Text style={Styles.timeText}>{trip.date}</Text>
                        <Text style={Styles.tripStatus}>{trip.status}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
            </Col>
          </Row>
        </Grid>
      </Card>
    </ScrollView>
  );
};

const matchToProp = (dispatch: Function) => ({
  getData: () => dispatch(getTrips())
});

const matchToState = (state: any) => ({
  data: state.Trips
});

export default connect(matchToState, matchToProp)(TripsPage);
