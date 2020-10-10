import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {logOut} from './redux/actions/auth';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import EditTodoScreen from './screens/EditTodoScreen';

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
          <>
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
            <Stack.Screen name="Edit" component={EditTodoScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
