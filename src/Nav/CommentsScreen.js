import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import ArrowIcon from '../../assets/images/svg/arrow-left.svg';
import ArrowTopIcon from '../../assets/images/svg/arrow-top.svg';

export const CommentsScreen = () => {
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);

  const hideKeyBoard = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={hideKeyBoard}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Комментарии</Text>
          <TouchableOpacity style={styles.goBackBtn} activeOpacity={0.8}>
            <ArrowIcon width={24} height={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.main}>
          <View style={styles.imageWraper}></View>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <View>
              <ScrollView
                style={{
                  ...styles.textWraper,
                  //   height: isShowKeyBoard ? 90 : 422,
                }}
              >
                <Text>ksjdfsdfj</Text>
                <Text>ksjdfsdfj</Text>
                <Text>ksjdfsdfj</Text>
                <Text>ksjdfsdfj</Text>
                <Text>ksjdfsdfj</Text>
                <Text>ksjdfsdfj</Text>
                <Text>ksjdfsdfj</Text>
                <Text>ksjdfsdfj</Text>
                <Text>ksjdfsdfj</Text>
                <Text>ksjdfsdfj</Text>
              </ScrollView>
            </View>

            <View style={styles.inputWraper}>
              <TextInput
                style={styles.input}
                placeholder="Комментировать..."
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsShowKeyBoard(true)}
              />
              <TouchableOpacity activeOpacity={0.8} style={styles.addComment}>
                <ArrowTopIcon width={10} height={14} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    paddingBottom: 16,
    // justifyContent: 'flex-end',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingTop: 75,
    paddingBottom: 11,
    borderBottomWidth: 0.5,
    flexDirection: 'row',

    borderBottomColor: '#E8E8E8',
  },

  title: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
  },

  goBackBtn: {
    position: 'absolute',
    left: 0,
    bottom: 12,
  },

  main: {
    marginHorizontal: 16,
    paddingTop: 32,
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
  textWraper: {
    height: 322,
    //   paddingTop
  },

  input: {
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#212121',
  },
  inputWraper: {
    // position: 'fixed',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    marginHorizontal: 16,
    marginTop: 31,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E8E8E8',
  },

  addComment: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 34,
    height: 34,
    backgroundColor: '#FF6C00',
    borderRadius: 50,
  },
});
