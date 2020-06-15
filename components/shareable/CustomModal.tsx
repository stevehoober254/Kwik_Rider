import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Icon, Modal, Text } from '@ui-kitten/components';
import { primaryBlue, primaryRed } from '../../constant/theme';

export enum Status {
  REJECTED = 'reject',
  ACCEPT = 'accept'
}

export interface ModalOpt {
  text: string;
  status: Status;
}

type Props = {
  visible: boolean;
  closeModal: (status: boolean, dealStatus?: Status) => void;
  modalOptions: ModalOpt;
};

const CustomModal: FC<Props> = ({ visible, closeModal, modalOptions }) => {
  const { text, status } = modalOptions;

  return (
    <Modal
      visible={visible}
      backdropStyle={Styles.backdrop}
      onBackdropPress={() => closeModal(false)}
    >
      <Card disabled={true}>
        <View style={Styles.container}>
          <View style={Styles.iconWrapper}>
            <Icon
              style={Styles.icon}
              fill={status === Status.ACCEPT ? primaryBlue : primaryRed}
              name={
                status === Status.ACCEPT ? 'done-all-outline' : 'close-outline'
              }
            />
          </View>
        </View>
        <Text style={Styles.caption}>{text}</Text>
        <Button
          style={
            status === Status.ACCEPT
              ? Styles.btn
              : { ...Styles.btn, ...Styles.btnReject }
          }
          textStyle={Styles.btnText}
          size="small"
          onPress={() => closeModal(false, status)}
        >
          {status === Status.ACCEPT ? 'Start Trip' : 'Reject Trip'}
        </Button>
      </Card>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 32,
    height: 32,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  iconWrapper: {
    borderColor: primaryBlue,
    borderStyle: 'solid',
    borderWidth: 1,
    width: 60,
    height: 60,
    borderRadius: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: primaryBlue,
    borderColor: primaryBlue
  },
  btnText: {
    textTransform: 'uppercase'
  },
  caption: {
    fontSize: 9,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  btnReject: {
    backgroundColor: primaryRed,
    borderColor: primaryRed
  }
});

export default CustomModal;
