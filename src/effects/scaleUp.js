import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useScaleUp = (isActive, duration = 400) => {
  return useAnimatedStyle(() => ({
    transform: [
      {scale: withTiming(isActive.value ? 1 : 0.5, {duration})},
    ],
  }));
};

export default useScaleUp;
