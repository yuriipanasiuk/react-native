import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

export const CommentsScreen = () => {
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);

  const hideKeyBoard = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={hideKeyBoard}>
      <View style={styles.container}>
        <ScrollView style={styles.main}>
          <View style={styles.imageWraper}></View>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <ScrollView style={styles.commentsText}></ScrollView>
            <View style={styles.inputWraper}>
              <TextInput
                style={styles.input}
                placeholder="Комментировать..."
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsShowKeyBoard(true)}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.addCommentBtn}
              >
                <Feather name="arrow-up" color="#ffffff" size={20} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    paddingTop: 32,
    paddingBottom: 16,
  },

  main: {
    marginHorizontal: 16,
  },
  imageWraper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
    marginBottom: 32,
    backgroundColor: '#F6F6F6',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  commentsText: {
    height: 322,
  },

  input: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#212121',
  },
  inputWraper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E8E8E8',
  },

  addCommentBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    width: 34,
    height: 34,
    backgroundColor: '#FF6C00',
    borderRadius: 50,
  },
});
