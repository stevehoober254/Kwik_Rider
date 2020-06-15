import {
  alerts,
  map,
  settings,
  support,
  trips
} from '../../../constant/path';
import { primaryBlue, primaryRed } from '../../../constant/theme';

export interface Menu {
  routeName: string;
  icon: string;
  stats?: string;
  color?: string;
}

const menu: Menu[] = [
  {
    routeName: trips,
    icon: 'activity-outline',
    stats: '44',
    color: primaryBlue
  },
  {
    routeName: alerts,
    icon: 'bell-outline',
    stats: '5',
    color: primaryRed
  },
  {
    routeName: support,
    icon: 'phone-call-outline'
  },
  {
    routeName: settings,
    icon: 'settings-outline'
  },
  {
    routeName: map,
    icon: 'map-outline'
  }
];

export default menu;
