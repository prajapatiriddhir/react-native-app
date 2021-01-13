import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import SearchDetails from './SearchDetails';
import {SliderBox} from 'react-native-image-slider-box';
import {Card} from 'react-native-paper';
const HomeScreen = (navigation) => {
  const images = [
    require('../assets/slider11.png'),
    require('../assets/slider22.png'),
    require('../assets/slider33.png'), // Local image
    require('../assets/slider44.png'), // Local image
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sliderConatiner}>
        <SliderBox
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          dotColor="#ffffff"
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 5,
            padding: 0,
            margin: 0,
          }}
        />
      </View>

      <Card style={styles.cardStyle}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../assets/ic_quiz.png')}
            style={styles.imageStyle}
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Quiz created</Text>

            <Text style={styles.textResultStyle}>0</Text>
          </View>
        </View>
      </Card>

      <Card style={styles.cardStyle}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../assets/ic_quiz_played.png')}
            style={styles.imageStyle}
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Quiz Played</Text>

            <Text style={styles.textResultStyle}>0</Text>
          </View>
        </View>
      </Card>
      <Card style={styles.cardStyle}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../assets/ic_self_discoveri.png')}
            style={styles.imageStyle}
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Self Discoveri</Text>

            <Text style={styles.textResultStyle}>Completed</Text>
          </View>
        </View>
      </Card>

      <Card style={styles.cardStyle}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../assets/ic_healtcare.png')}
            style={styles.imageStyle}
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.titleStyle}>Healthcare</Text>

            <Text style={styles.textResultStyle}>0 %</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sliderConatiner: {
    margin: 5,
    padding: 5,
  },

  cardStyle: {
    margin: 7,
    padding: 10,
    elevation: 2,
  },

  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 24,
    height: 24,
  },

  titleStyle: {
    marginLeft: 10,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textResultStyle: {
    marginLeft: 5,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default HomeScreen;
