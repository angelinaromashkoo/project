import React from 'react';
import {View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageScore={3}
        imageSource={require('../../assets/forest.jpg')}
      />
      <ImageDetail
        title="Beach"
        imageScore={6}
        imageSource={require('../../assets/beach.jpg')}
      />
      <ImageDetail
        title="Mountain"
        imageScore={9}
        imageSource={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};

export default ImageScreen;
