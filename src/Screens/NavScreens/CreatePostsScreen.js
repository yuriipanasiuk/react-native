import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

import { MapScreen } from './MapScreen';

export const CreatePostsScreen = ({ navigation }) => {
  const [downloadImage, setDownloadImage] = useState(false);
  const [place, setPlace] = useState('');
  const [showLocation, setShowLocation] = useState(false);

  const hideKeyBoard = () => {
    Keyboard.dismiss();
  };

  const onPublish = () => {
    navigation.navigate('PostsScreen');
  };

  const handleChange = text => {
    setPlace(text);
  };

  const resetPlace = () => {
    setPlace('');
  };

  const handleClick = () => {
    // console.log('first');
    setShowLocation(true);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyBoard}>
      <View style={styles.container}>
        <View style={styles.main}>
          <KeyboardAvoidingView behavior="position">
            <View style={styles.imageWraper}>
              <TouchableOpacity activeOpacity={0.8} style={styles.circle}>
                <FontAwesome name="camera" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
            <Text style={styles.downLoadText}>
              {downloadImage ? 'Редактировать фото' : 'Загрузите фото'}
            </Text>

            <View style={styles.nameWraper}>
              <TextInput
                style={styles.nameInput}
                placeholder="Название..."
                placeholderTextColor="#BDBDBD"
              />
            </View>

            <View style={styles.location} onPress={handleClick}>
              <Feather name="map-pin" size={24} style={styles.locationBtn} />

              <View style={styles.locationWraper}>
                <TextInput
                  style={styles.locationInput}
                  placeholder="Местность..."
                  placeholderTextColor="#BDBDBD"
                  onChangeText={text => handleChange(text)}
                  onSubmitEditing={resetPlace}
                  value={place}
                />
              </View>
              {showLocation && <MapScreen />}
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={onPublish}
            >
              <Text style={styles.buttonText}>Опубликовать</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.deletePostBtn}>
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 32,
    paddingBottom: 33,
  },
  main: {
    marginHorizontal: 16,
  },

  deletePostBtn: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },

  imageWraper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
    marginBottom: 8,
    backgroundColor: '#F6F6F6',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  downLoadText: {
    marginBottom: 48,
    fontSize: 16,
    fontFamily: 'Roboto-Regulat',
    color: '#BDBDBD',
  },
  location: {
    position: 'relative',
    marginBottom: 32,
  },
  locationBtn: {
    position: 'absolute',
    bottom: 15,
    color: '#BDBDBD',
  },

  locationWraper: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  nameWraper: {
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  nameInput: {
    paddingBottom: 15,
    fontSize: 16,
    fontFamily: 'Roboto-Regulat',
    color: '#212121',
  },
  locationInput: {
    paddingBottom: 15,
    paddingLeft: 32,
    fontSize: 16,
    fontFamily: 'Roboto-Regulat',
    color: '#212121',
  },
  button: {
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    marginBottom: 120,
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#BDBDBD',
    fontSize: 16,
    fontFamily: 'Roboto-Regulat',
  },
});
