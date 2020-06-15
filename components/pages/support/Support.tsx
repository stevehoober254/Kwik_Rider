/**
 * @format
 * @flow
 */
import React, { FC, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Input } from '@ui-kitten/components';
import Styles from './styles';
import { getFaqs } from '../../../store/actions';
import { connect } from 'react-redux';
import { Faqs, SupportState } from '../../../models';

type Props = {
  getData: () => void;
  data: SupportState;
};

const SupportPage: FC<Props> = ({ getData, data }) => {
  const { faqs } = data;

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <View style={Styles.supportContainer}>
        <Input
          size="large"
          textStyle={Styles.searchInput}
          placeholder="Search using keywords"
        />
      </View>
      <ScrollView>
        <View style={Styles.supportContainer}>
          {faqs.map((faq: Faqs) => (
            <Card key={faq.uuid} style={Styles.card}>
              <Text style={Styles.faq}>{faq.question}</Text>
              <Text style={Styles.answer}>{faq.answer}</Text>
            </Card>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const matchToProp = (dispatch: Function) => ({
  getData: () => dispatch(getFaqs())
});

const matchToState = (state: any) => ({
  data: state.Support
});

export default connect(matchToState, matchToProp)(SupportPage);
