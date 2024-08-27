import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import QRCode from './screens/QRCode';
import NFTDisplay from './screens/NFTDisplay';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="QRCode" component={QRCode}/>
        <Stack.Screen name="NFTDisplay" component={NFTDisplay}/>
      </Stack.Navigator>
    </NavigationContainer>
  );  
}

export default App;