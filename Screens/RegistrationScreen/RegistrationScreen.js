import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,

} from "react-native";

const RegistrationScreen = () => {
  return (

    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      
     <View style={styles.form}>
     <Text style={styles.text}>Регистрация</Text>

     <View style={{marginBottom: 16}}>
     <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
     
     <TextInput
        style={styles.input}
        placeholder="Логин"
        placeholderTextColor="#BDBDBD"
      />
     </KeyboardAvoidingView>
     </View>
    

    <View style={{marginBottom: 16}}>
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
     <TextInput
        style={styles.input}
        placeholder="Адрес электронной почты"
        placeholderTextColor="#BDBDBD"
      />
     </KeyboardAvoidingView>
    </View>

    <View style={{marginBottom: 43}}>
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
     <TextInput
        style={styles.input}
        placeholder="Пароль"
        placeholderTextColor="#BDBDBD"
        
      />
     </KeyboardAvoidingView>
    </View>

     <View style={styles.button}>
     <Button title="Зарегистрироваться" color='#ffffff'/>
     </View>

     <Text>Уже есть аккаунт? Войти</Text>
  
     </View>
    </View>

  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 78,
    height: 549,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    marginBottom: 33,
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    textAlign: "center",
  },
  imageContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  form:{},
  input: {
    height: 50,
    marginHorizontal: 16,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 15,
    fontSize: 16,

    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderRadius: 8,
  },
  button:{
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginHorizontal: 16,
   
    paddingTop: 16,
    paddingBottom: 16,
  },
});
