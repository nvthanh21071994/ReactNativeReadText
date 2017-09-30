import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GetListPoem from './GetListPoem';
import GetPoem from './GetPoem';
const StackApp = StackNavigator(
  {
    GetListPoem: { screen: GetListPoem },
    GetPoem: { screen: GetPoem },
  },
  {
    initialRouteName: 'GetListPoem',
    headerMode: 'none',

  }
);
AppRegistry.registerComponent('ReadText', () => StackApp);