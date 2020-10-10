import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {logOut} from './redux/actions/auth';
import LoginScreen from './screens/LoginScreen';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const Navigation = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLogged ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerRight: () => (
                <View style={{marginHorizontal: 16}}>
                  <Icon
                    onPress={() => dispatch(logOut())}
                    name="sign-out"
                    type="font-awesome"
                  />
                </View>
              ),
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
