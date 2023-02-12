import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import ArrowIcon from '../../assets/images/svg/arrow-left.svg';
import MapPinIcon from '../../assets/images/svg/map-pin.svg';
import TrashIcon from '../../assets/images/svg/trash.svg';
import CameraIcon from '../../assets/images/svg/camera.svg';
import { useState } from 'react';

export const CreatePostsScreen = () => {
  const [downloadImage, setDownloadImage] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Создать публикацию</Text>
        <TouchableOpacity style={styles.goBackBtn} activeOpacity={0.8}>
          <ArrowIcon width={24} height={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.imageWraper}>
          <TouchableOpacity activeOpacity={0.8} style={styles.circle}>
            <CameraIcon width={24} height={24} />
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

        <View style={styles.location}>
          <MapPinIcon width={24} height={24} style={styles.locationBtn} />

          <View style={styles.locationWraper}>
            <TextInput
              style={styles.locationInput}
              placeholder="Местность..."
              placeholderTextColor="#BDBDBD"
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.deletePostBtn}>
          <TrashIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    // justifyContent: 'space-between',
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
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: 34,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
  },
  deletePostBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },
  goBackBtn: {
    position: 'absolute',
    left: 0,
    bottom: 12,
  },
  main: {
    marginHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 120,
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
    backgroundColor: '#FF6C00',
    borderRadius: 100,
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
});
