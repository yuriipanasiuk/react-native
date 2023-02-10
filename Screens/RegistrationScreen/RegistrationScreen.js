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
} from 'react-native';

const RegistrationScreen = () => {
  const [isKeyBoardShown, setIsKeyBoardShown] = useState(false);

  const keyboardHide = () => {
    setIsKeyBoardShown(false);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View style={styles.imageContainer}></View>

        <View style={styles.form}>
          <Text style={styles.text}>Регистрация</Text>

          <View style={{ ...styles.inputWraper, marginBottom: isKeyBoardShown ? 2 : 43 }}>
            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="Логин"
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsKeyBoardShown(true)}
              />
            </View>

            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsKeyBoardShown(true)}
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsKeyBoardShown(true)}
              />
            </View>
          </View>

          <View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={keyboardHide}>
              <Text style={styles.buttonText}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingTop: 92,
    paddingBottom: 78,
    height: 549,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    marginBottom: 33,
    fontWeight: '500',
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
  },
  link: {
    color: '#1B4371',
    textAlign: 'center',
  },
});
