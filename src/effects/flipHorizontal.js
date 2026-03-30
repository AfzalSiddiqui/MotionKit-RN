import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useFlipHorizontal = (isActive, duration = 600) => {
  return useAnimatedStyle(() => ({
    transform: [
      {perspective: 1000},
      {rotateY: withTiming(isActive.value ? '180deg' : '0deg', {duration})},
    ],
  }));
};

export default useFlipHorizontal;
