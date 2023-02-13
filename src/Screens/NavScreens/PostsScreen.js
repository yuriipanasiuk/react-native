import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const PostsScreen = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    justifyContent: 'space-between',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 34,
    borderTopWidth: 0.5,
    borderTopColor: '#E8E8E8',
  },
  title: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
  },
  unionBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 42,
    marginRight: 42,
    width: 70,
    height: 40,
    backgroundColor: '#FF6C00',
    borderRadius: 20,
  },
  logOutBtn: {
    position: 'absolute',
    right: 0,
    bottom: 12,
  },
});
