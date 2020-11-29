import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './sources/screens/HomeScreen';
import ComponentsScreen from './sources/screens/ComponentsScreen';
import ListScreen from './sources/screens/ListScreen';
import ImageScreen from './sources/screens/ImageScreen';
import CounterScreen from './sources/screens/CounterScreen';
import ColorScreen from './sources/screens/ColorScreen';
import SquareScreen from './sources/screens/SquareScreen';
import TextScreen from './sources/screens/TextScreen';
import BoxScreen from './sources/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Angelina App',
    },
  },
);

export default createAppContainer(navigator);
