import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useFlipVertical = (isActive, duration = 600) => {
  return useAnimatedStyle(() => ({
    transform: [
      {perspective: 1000},
      {rotateX: withTiming(isActive.value ? '180deg' : '0deg', {duration})},
    ],
  }));
};

export default useFlipVertical;
