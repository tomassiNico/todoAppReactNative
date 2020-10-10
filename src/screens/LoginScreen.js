import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Icon, Input, Button} from 'react-native-elements';
import {logIn} from '../redux/actions/auth';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onPressLogin = () => {
    if (!username || !password) {
      return;
    }
    setLoading(true);
    //timeout para "simular" peticion asincrona de login
    setTimeout(() => {
      dispatch(logIn(username));
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Input
        value={username}
        onChange={(value) => setUsername(value.nativeEvent.text)}
        placeholder="Usuario"
        leftIcon={{type: 'font-awesome', name: 'user'}}
      />
      <Input
        value={password}
        onChange={(value) => setPassword(value.nativeEvent.text)}
        placeholder="Contraseña"
        secureTextEntry={!passwordVisible}
        leftIcon={{type: 'font-awesome', name: 'lock'}}
        rightIcon={
          <Icon
            name="eye"
            type="font-awesome"
            onPress={() => setPasswordVisible((state) => !state)}
          />
        }
      />
      <Button
        title="Ingresar"
        type="outline"
        disabled={loading}
        loading={loading}
        onPress={onPressLogin}
      />
    </View>
  );
};

export default LoginScreen;
