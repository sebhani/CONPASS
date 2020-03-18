import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    zIndex: 1,
    bottom: -1,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 350,
    position: 'absolute'
  },
  carousel: {
    borderColor: 'rgba(0,0,0,0)',
    bottom: 0,
    marginBottom: 48,
    borderRadius: 10
  },
  slide: {
    backgroundColor: 'rgba(0,0,0,.1)',
    height: 200,
    width: 300,
    padding: 24,
    borderRadius: 24,
    bottom: 0,
    position: 'absolute',
    borderColor: 'rgba(0,0,0,0)',
  },
  information: {
    bottom: -80,
    left: -10,
    height: 150,
    width: 300,
    position: 'relative',

  },
  image: {
    height: 100,
    width: 300,
    position: 'absolute',
    borderRadius: 10
  }
});

export default styles;