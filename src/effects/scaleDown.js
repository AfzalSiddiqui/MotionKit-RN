import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useScaleDown = (isActive, duration = 400) => {
  return useAnimatedStyle(() => ({
    transform: [
      {scale: withTiming(isActive.value ? 1 : 1.5, {duration})},
    ],
  }));
};

export default useScaleDown;
