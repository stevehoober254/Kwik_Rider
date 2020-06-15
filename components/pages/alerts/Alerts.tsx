/**
 * @format
 * @flow
 */
import React, { FC, useEffect, useState } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Styles from './styles';
import {
  acceptDelivery,
  getAlerts,
  rejectDelivery
} from '../../../store/actions';
import { connect } from 'react-redux';
import { Alerts, Alertstate } from '../../../models';
import { Button } from '@ui-kitten/components';
import Theme from '../../../constant/theme';
import CustomModal, { ModalOpt, Status } from '../../shareable/CustomModal';

const AlertIcon = '../../../assets/images/alert.png';

type Props = {
  getData: () => void;
  accept: (uuid?: string) => void;
  reject: (uuid?: string) => void;
  data: Alertstate;
};

const AlertsPage: FC<Props> = ({ getData, /*reject, accept,*/ data }) => {
  const [modal, setModal] = useState(false);
  const [modalOptions, setModalOpt] = useState<ModalOpt>({
    text: '',
    status: Status.ACCEPT
  });
  const { alerts } = data;

  useEffect(() => {
    getData();
  }, [getData]);

  const rejectDeal = (_uuid: string) => {
    // reject(uuid);
    setModal(true);
    setModalOpt({
      ...modalOptions,
      status: Status.REJECTED,
      text: 'Are you sure ?'
    });
  };

  const acceptDeal = (_uuid: string) => {
    // accept(uuid);
    setModal(true);
    setModalOpt({
      ...modalOptions,
      status: Status.ACCEPT,
      text: 'You have a deal'
    });
  };

  const modalResp = (status: boolean, dealStatus: Status | undefined) => {
    console.log(dealStatus);
    setModal(status);
  };

  return (
    <ScrollView>
      <CustomModal
        visible={modal}
        closeModal={modalResp}
        modalOptions={modalOptions}
      />
      {alerts &&
        alerts.map((alert: Alerts) => (
          <View key={alert.uuid} style={Styles.container}>
            <View style={Styles.leftPartition}>
              <Image style={Styles.imageProfile} source={require(AlertIcon)} />
            </View>
            <View style={Styles.rightPartition}>
              <View style={Styles.content}>
                <Text style={Styles.name}>
                  <Text style={Styles.label}>From:</Text> {alert.from}
                </Text>
                <Text style={Styles.description}>
                  <Text style={Styles.label}>To:</Text> {alert.to}
                </Text>
                <Text style={Styles.time}>6 Seconds ago</Text>
              </View>
              <View style={Styles.callToAction}>
                <Button
                  size="small"
                  style={Styles.button}
                  onPress={() => acceptDeal('user_id or leave empty')}
                  textStyle={{ ...Theme.buttonTheme, ...Styles.btnText }}
                >
                  Accept
                </Button>
                <Button
                  size="small"
                  style={{ ...Styles.button, ...Styles.rejectBtn }}
                  onPress={() => rejectDeal('user_id or leave empty')}
                  textStyle={{ ...Theme.buttonTheme, ...Styles.btnText }}
                >
                  Reject
                </Button>
              </View>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const matchToProp = (dispatch: Function) => ({
  getData: () => dispatch(getAlerts()),
  accept: (uuid?: string) => dispatch(acceptDelivery(uuid)),
  reject: (uuid?: string) => dispatch(rejectDelivery(uuid))
});

const matchToState = (state: any) => ({
  data: state.Alerts
});

export default connect(matchToState, matchToProp)(AlertsPage);
