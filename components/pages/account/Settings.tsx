/**
 * @format
 * @flow
 */
import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Styles from './styles';
import { Card } from '@ui-kitten/components';
import Config from '../../../assets/staticData/config.json';
import { UpdatePassword, UpdateProfile } from './steppers';

const Settings: FC = () => {
  const [step, setStep] = useState(0);

  const changeStep = (stp: number) => setStep(stp);

  const refinedTabStyle = (current: number) => {
    if (step === current) {
      return { ...Styles.touchTab, ...Styles.activeTab };
    }

    return Styles.touchTab;
  };

  const refinedTextStyle = (current: number) => {
    if (step === current) {
      return { ...Styles.tabText, ...Styles.activeText };
    }

    return Styles.tabText;
  };

  return (
    <>
      <View style={Styles.menuTab}>
        <TouchableOpacity
          onPress={() => changeStep(0)}
          style={refinedTabStyle(0)}
        >
          <Text style={refinedTextStyle(0)}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeStep(1)}
          style={refinedTabStyle(1)}
        >
          <Text style={refinedTextStyle(1)}>Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeStep(2)}
          style={refinedTabStyle(2)}
        >
          <Text style={refinedTextStyle(2)}>Avatar</Text>
        </TouchableOpacity>
      </View>
      <View>
        {step === 0 && (
          <View style={Styles.settings}>
            <UpdateProfile />
          </View>
        )}
        {step === 1 && (
          <View style={Styles.settings}>
            <UpdatePassword />
          </View>
        )}
        {step === 2 && (
          <View style={Styles.settings}>
            <Card style={Styles.uploadImgArea}>
              <Text style={Styles.uploadImgText}>Select profile image</Text>
            </Card>
            <View style={Styles.profileAvatar}>
              <Image
                style={Styles.imageProfile}
                source={{ uri: Config.dummyPic }}
              />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Settings;
