import { useState } from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
} from 'react-native';

import AddImageIcon from '../../../assets/images/svg/addImageIcon.svg';
import AddImageActiveIcon from '../../../assets/images/svg/addImageIconActive.svg';

//TODO: when click on keyboar return set state to false
const initialValue = {
  login: '',
  email: '',
  password: '',
};

const RegistrationScreen = ({ navigation }) => {
  const [isKeyBoardShown, setIsKeyBoardShown] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [userValue, setUserValue] = useState(initialValue);
  const [addImage, setAddImage] = useState(false);

  const onSubmit = () => {
    setIsKeyBoardShown(false);
    Keyboard.dismiss();
    console.log(userValue);
    navigation.navigate('Home');
    setUserValue(initialValue);
  };

  const handleContainerClick = () => {
    setIsKeyBoardShown(false);
    Keyboard.dismiss();
  };

  const handleAddImage = () => {
    setAddImage(prevState => !prevState);
  };

  const isShowingPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerClick}>
      <View style={styles.wraper}>
        <ImageBackground
          style={styles.image}
          source={require('../../../assets/images/Photo-BG.jpg')}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{
                ...styles.container,
                paddingBottom: isKeyBoardShown ? 0 : 78,
              }}
            >
              <View style={styles.imageContainer}>
                <View style={styles.addButton}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleAddImage}
                  >
                    {addImage ? (
                      <View style={styles.activeIconButton}>
                        <AddImageActiveIcon width={25} height={25} />
                      </View>
                    ) : (
                      <AddImageIcon width={25} height={25} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.form}>
                <Text style={styles.text}>Регистрация</Text>

                <View
                  style={{
                    ...styles.inputWraper,
                    marginBottom: isKeyBoardShown ? 32 : 43,
                  }}
                >
                  <View style={{ marginBottom: 16 }}>
                    <TextInput
                      style={styles.input}
                      placeholder="Логин"
                      placeholderTextColor="#BDBDBD"
                      onFocus={() => setIsKeyBoardShown(true)}
                      value={userValue.login}
                      onChangeText={value =>
                        setUserValue(prevState => ({
                          ...prevState,
                          login: value,
                        }))
                      }
                    />
                  </View>

                  <View style={{ marginBottom: 16 }}>
                    <TextInput
                      style={styles.input}
                      placeholder="Адрес электронной почты"
                      placeholderTextColor="#BDBDBD"
                      onFocus={() => setIsKeyBoardShown(true)}
                      value={userValue.email}
                      onChangeText={value =>
                        setUserValue(prevState => ({
                          ...prevState,
                          email: value,
                        }))
                      }
                    />
                  </View>

                  <View style={styles.paswordInput}>
                    <TextInput
                      style={styles.input}
                      placeholder="Пароль"
                      placeholderTextColor="#BDBDBD"
                      secureTextEntry={showPassword}
                      onFocus={() => setIsKeyBoardShown(true)}
                      value={userValue.password}
                      onChangeText={value =>
                        setUserValue(prevState => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                    />
                    <View style={styles.paswordShowWraper}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={isShowingPassword}
                      >
                        <Text style={styles.showLink}>
                          {showPassword ? 'Показать' : 'Скрыть'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {!isKeyBoardShown && (
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.button}
                      onPress={onSubmit}
                    >
                      <Text style={styles.buttonText}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate('Login')}
                    >
                      <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  wraper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    position: 'relative',
    paddingTop: 92,
    paddingBottom: 78,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'flex-end',
  },
  text: {
    marginBottom: 33,
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
    textAlign: 'center',
  },
  imageContainer: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },

  form: {},
  input: {
    height: 50,
    marginHorizontal: 16,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 15,
    fontSize: 16,
    fontFamily: 'Roboto-Regulat',

    backgroundColor: '#F6F6F6',
    color: '#212121',
    borderRadius: 8,
  },
  inputWraper: {
    marginBottom: 43,
  },
  button: {
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginHorizontal: 16,
    marginBottom: 32,
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Roboto-Regulat',
  },
  link: {
    color: '#1B4371',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto-Regulat',
  },
  showLink: {
    color: '#1B4371',
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'Roboto-Regulat',
  },
  addButton: {
    position: 'fixed',
    left: 12.5,
    top: 85,
    alignItems: 'flex-end',
  },
  paswordInput: { position: 'relative' },
  paswordShowWraper: {
    position: 'absolute',
    right: 32,
    top: 16,
  },
  activeIconButton: {
    transform: [{ rotate: '45deg' }],
  },
});
