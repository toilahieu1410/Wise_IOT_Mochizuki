import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import backgroundScreen from '../../publics/images/form_login.jpg';
import logo from '../../publics/images/Wise_iot_white.png';
import {getApiLogin} from '../../redux/auth/action';
const {width: WIDTH} = Dimensions.get('window');
const SignInScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(true);

  const getInfo = () => {
    dispatch(getApiLogin(username, password));
  };

  return (
    <ImageBackground source={backgroundScreen} style={styles.picture}>
   
      <View style={styles.opacity}>
      <KeyboardAvoidingView
      behavior={Platform.OS == "android" ? "padding" : "height"}
      style={styles.container}
    >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formLogin}>
          
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.contentLogin}>
          <View>
            <Icon
              name={'ios-person-outline'}
              size={28}
              color={'rgba(255, 255, 255, 0.7)'}
              style={styles.inputIcon}
            />
            <TextInput
              label="username"
              mode="outlined"
              value={username}
              style={styles.textInput}
              theme={{colors: {primary: 'blue'}}}
              onChangeText={(text) => setUsername(text)}
              placeholder={'username'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            />
          </View>
          <View>
            <Icon
              name={'ios-lock-closed-outline'}
              size={28}
              color={'rgba(255, 255, 255, 0.7)'}
              style={styles.inputIcon}
            />
            <TextInput
              placeholderTextColor="#000" 
              label="password"
              mode="outlined"
              value={password}
              style={styles.textInput}
              theme={{colors: {primary: 'blue'}}}
              onChangeText={(text) => setPassword(text)}
              placeholder={'password'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid="transparent"
              secureTextEntry={showPass}
            />
            <TouchableOpacity
              style={styles.btnEye}
              onPress={() => setShowPass(!showPass)}>
              <Icon
                name={'ios-eye-outline'}
                size={26}
                color={'rgba(255, 255, 255, 0.7)'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.loginSuccess} opacity={0.8}>
          <TouchableOpacity
            mode="contained"
            style={styles.btnLogin}
            onPress={() => getInfo()}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
          </View>
          </View>
     
  
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
   
    </ImageBackground>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  opacity: {
    borderWidth: 1,
    backgroundColor: '#282f3aad',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  formLogin: {
    marginTop:150,
    top:-40,
    flex: 1,
    justifyContent: "center"
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: 'stretch',
    marginTop: 0,
    top:-200,
    marginBottom: 0,
  },
  textInput: {
    width: WIDTH - 55,
    height: 50,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    paddingLeft: 55,
    marginBottom: 15
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 40,
  },
  contentLogin: {
    marginTop:50,
  },
  btnEye: {
    position: 'absolute',
    top: 12,
    right: 50,
  },
  btnLogin: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#114237',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 20,
    textAlign: 'center',
 
  },
  loginSuccess: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
