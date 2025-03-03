import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Stack = createNativeStackNavigator();

const FirstScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000); // 2 giây trước khi chuyển

    return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
  }, [navigation]);

  return (
    <View style={styles.firstContainer}>
      <Image
        source={require('./assets/icon_nectar.png')}
        style={styles.firstImg}
      />
      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => navigation.navigate('Onboarding')}
      >
      </TouchableOpacity>
    </View>
  );
};

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.onboardingContainer}>
      <Image
        source={require('./assets/background_onbording.png')}
        style={styles.backgroundOnboarding}
      />
      <Image
        source={require('./assets/icon_carrot.png')}
        style={styles.onboardingImg}
      />
      <View style={styles.textBording}>
        <Text style={styles.text1Bording}>
          Welcome to our store
        </Text>
        <Text style={styles.text2Bording}>
          Get your groceries in as fast as one hour
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonBording} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.textbtnBording}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.SignInContainer}>
      <Image
        source={require('./assets/bg_signin.png')}
        style={styles.signinimg}
      />
      {/* <Text style={styles.title}>Get your groceries with nectar</Text>
      <Text style={styles.countryCode}>Bangladesh +880</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
      
      <Text style={styles.socialMediaText}>Or connect with social media</Text>
      
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.buttonText}>G Continue with Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    backgroundColor: '#5eb078',
  },
  firstImg: {
    width: 267.4,
    height: 68.6,
    marginTop: 413.7,
    marginLeft: 73.3,
  },
  startButton: {
    width: '100%',
    height:'100%'
  },
  firstButton1: {
    width:'100%',
    height:'100%'
  },
  onboardingContainer: {
    flex: 1,
  },
  backgroundOnboarding: {
    position: 'relative',
    width: '101%',
    height: '100%',
  },
  onboardingImg: {
    width: 48.5,
    height: 56.4,
    marginTop: 470,
    marginLeft: 182.8,
    position: 'absolute',
  },
  textBording: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 200, // Căn giữa dọc
    left: 0,
    right: 0,
  },
  text1Bording: {
    width: 253,
    height: 86,
    color: 'white',
    fontFamily: 'Gilroy', // Đảm bảo bạn đã tải font này vào ứng dụng
    fontWeight: '600',
    fontSize: 48,
    lineHeight: 42,
    letterSpacing: 0,
    textAlign: 'center',
  },
  text2Bording: {
    width: 295,
    height: 15,
    marginTop: 5,
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'rgba(252, 252, 252, 0.34)', // Đã sửa lại màu sắc
  },
  buttonBording: {
    position: 'absolute',
    backgroundColor: '#5eb078',
    width: 353,
    height: 67,
    bottom: 100, // Căn giữa dọc
    left: 30.5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbtnBording: {
    color: 'white',
    fontWeight: '600', // Đã sửa lại định dạng
    fontSize: 20,
  },
  SignInContainer:{
    flex:1,
    backgroundColor: '#fcfcfc'
  },
  signinimg: {
    width: 413.36627197265625,
    height: 374.151611328125,
    marginTop: 30,
    backgroundColor: '#fcfcfc'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 160, // Khoảng cách từ hình nền
    color: '#333',
  },
  countryCode: {
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    width: '100%',
    marginTop: 20,
  },
  socialMediaText: {
    fontSize: 16,
    color: '#888',
    marginVertical: 20,
  },
  googleButton: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    borderRadius: 10,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;