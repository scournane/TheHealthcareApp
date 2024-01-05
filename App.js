import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from "./components/Intro";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Settings from "./components/Settings"
import Profile from "./components/Profile";
import SettingsFull from "./components/SettingsFull";
import Password from "./components/Password";
import Notifications from "./components/Notifications";
import MainScreen from "./components/MainScreen";
import AddUserScreen from "./components/AddUserScreen";
import QR from "./components/QR";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name = "Profile" component = {Profile} options={{ headerShown: true }} />
        <Stack.Screen name = "SettingsFull" component = {SettingsFull} />
        <Stack.Screen name = "Password" component = {Password} options={{ headerShown: true }} />
        <Stack.Screen name = "Notifications" component = {Notifications} options={{ headerShown: true }} />
        <Stack.Screen name = "MainScreen" component = {MainScreen} options={{ headerShown: true }} />
        <Stack.Screen name = "AddUserScreen" component = {AddUserScreen} options={{ headerShown: true }} />
        <Stack.Screen name = "QR" component = {QR} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
