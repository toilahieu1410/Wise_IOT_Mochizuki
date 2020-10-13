import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    ImageBackground,
    TextInput,
    Dimensions,
    Button,
    Alert
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';
  import {useDispatch, useSelector} from 'react-redux';
  import backgroundScreen from '../../publics/images/city-night.jpg';
  import logo from '../../publics/images/Wise_iot_white.png';
  import {getApiLogin} from '../../redux/auth/action';
  const {width: WIDTH} = Dimensions.get('window')
const SignInScreen = () => {
    const dispatch = useDispatch();
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[showPass, setShowPass] = useState(true);

    const getInfo = () => {
        dispatch(getApiLogin(username, password))
    }

    return (
        <ImageBackground source={backgroundScreen} style={styles.picture}>
      <View style={styles.opacity}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} /> 
        </View>
        <View>
          <Icon name={'ios-person-outline'} size={28} color={'rgba(255, 255, 255, 0.7)' } style={styles.inputIcon} />
            <TextInput 
            label = 'username'
            mode = 'outlined'
            value = {username}
            style = {styles.textInput}
            theme = {{colors: {primary: 'blue'}}}
            onChangeText = {(text) => setUsername(text)}
            placeholder = {'username'}
            placeholderTextColor = {'rgba(255, 255, 255, 0.7)'}
          />
        </View>
        <View>
        <Icon name={'ios-paw-outline'} size={28} color={'rgba(255, 255, 255, 0.7)' } style={styles.inputIcon} />
        <TextInput 
          label = 'password'
          mode = 'outlined'
          value = {password}
          style = {styles.textInput}
          theme = {{colors: {primary: 'blue'}}}
          onChangeText = {(text) => setPassword(text)}
          placeholder = {'password'}
          placeholderTextColor = {'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid = 'transparent'
          secureTextEntry={showPass}
        />

        <TouchableOpacity style={styles.btnEye} onPress={() => setShowPass(false)}>
          <Icon name={'ios-eye-outline'} size={26} color={'rgba(255, 255, 255, 0.7)'}/>
        </TouchableOpacity>
        </View>

        <TouchableOpacity
        mode = 'contained'
        style ={styles.btnLogin}
        onPress={() => getInfo()}>
        <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    picture: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center'
  },
    opacity: {
      backgroundColor: '#282f3ac7',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    logoContainer: {
      alignItems: 'center'
    },
    logo: {
      width: 160,
      height: 80,
      resizeMode: 'stretch',
      marginTop: 70,
      marginLeft: 20,
      marginBottom: 70
    },
    textInput: {
      width: WIDTH -55,
      height: 50,
      borderRadius: 25,
      fontSize: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
      color: 'rgba(255, 255, 255, 0.7)',
      marginHorizontal: 25,
      marginBottom: 15,
      paddingLeft: 55
    },
    inputIcon: {
      position: 'absolute',
      top: 10,
      left: 37
    },
    btnEye: {
      position: 'absolute',
      top: 12,
      right: 50
    },
    btnLogin: {
      width: WIDTH - 250,
      height: 45,
      borderRadius: 25,
      backgroundColor: '#432577',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 200
    },
    textLogin: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 20,
      textAlign: 'center'
    }
  })