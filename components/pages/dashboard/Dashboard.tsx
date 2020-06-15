/**
 * @format
 * @flow
 */
import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Layout, Icon } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { account } from '../../../constant/path';
import Styles from './styles';
import { defaultWhite, primaryBlue } from '../../../constant/theme';
import DashboardMenu, { Menu } from './menu';

type Props = {
  navigation: any;
};

const DashboardPage: FC<Props> = ({ navigation }) => {
  const navigateTo = (routeName: string) => {
    navigation.navigate(routeName, {});
  };

  return (
    <ScrollView>
      <View style={Styles.containerPaddingTop}>
        <Layout style={[Styles.container, { backgroundColor: primaryBlue }]}>
          <Text style={{ color: defaultWhite }}>Driver</Text>
          <Text style={Styles.menuText} category="h4" status="control">
            Kidali Kevin
          </Text>
          <View style={Styles.divider} />
        </Layout>

        <View style={Styles.dashboardContainer}>
          {DashboardMenu.map((item: Menu) => (
            <View key={item.routeName} style={Styles.dashboardBlocks}>
              <TouchableOpacity onPress={() => navigateTo(item.routeName)}>
                <View style={Styles.layout}>
                  {item.stats && (
                    <View style={{ ...Styles.badge, borderColor: item.color }}>
                      <Text style={{ ...Styles.badgeText, color: item.color }}>
                        {item.stats}
                      </Text>
                    </View>
                  )}
                  <Icon
                    name={item.icon}
                    width={32}
                    height={32}
                    fill={primaryBlue}
                  />
                  <Text style={Styles.menuText}>{item.routeName}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
          <View style={Styles.dashboardBlocks}>
            <TouchableOpacity onPress={() => navigateTo(account)}>
              <View style={Styles.layout}>
                <Icon
                  name="log-out-outline"
                  width={32}
                  height={32}
                  fill={primaryBlue}
                />
                <Text style={Styles.menuText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardPage;
