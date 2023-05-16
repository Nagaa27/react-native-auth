import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useState,  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Login from './app/screens/Login';
import Details from './app/screens/Details';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
    return (
        <InsideStack.Navigator>
            <InsideStack.Screen name='My To do' component={List} />
            <InsideStack.Screen name='My Details' component={Details} />
        </InsideStack.Navigator>

    )
}

export default function App() {
    const [user, setUser] = useState < user | null > (null);

    useEffect(() => {
        onAuthStateChange(FIREBASE_AUTH, (user) => {
            console.log('user', user);
            setuser(user);
        });
    }, [])


  return (

      <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
              {user ? (
                  <Stack.Screen name="Login" component={InsideLayout} options={{ headerShown: true }} />
              ) :
                 < Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
}


