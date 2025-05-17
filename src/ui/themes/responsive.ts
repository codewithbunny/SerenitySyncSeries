/* 
Installation needed
npm install react-native-device-info react-native-size-matters
*/ 


import { useWindowDimensions, Platform } from 'react-native';
import {
  moderateScale,
  verticalScale,
  scale,
} from 'react-native-size-matters';
import DeviceInfo from 'react-native-device-info';

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  const isPortrait = height >= width;
  const isLandscape = !isPortrait;

  const isTablet = DeviceInfo.isTablet();
  const isIOS = Platform.OS === 'ios';
  const isAndroid = Platform.OS === 'android';

  const screenWidth = Math.min(width, height);
  const screenHeight = Math.max(width, height);

  const scaleFont = (size: number) => {
    if (isTablet) {
      return moderateScale(size * 1.2);
    }
    return moderateScale(size);
  };

  return {
    // Orientation
    isPortrait,
    isLandscape,

    // Device type
    isTablet,
    isIOS,
    isAndroid,

    // Dimensions
    screenWidth,
    screenHeight,

    // Scalers
    scaleFont,
    scaleVertical: (size: number) => verticalScale(size), // For vertical scaling
    scale: (size: number) => scale(size), // General purpose or for horiontal scaling
  };
};
