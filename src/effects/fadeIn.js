import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useFadeIn = (isActive, duration = 500) => {
  return useAnimatedStyle(() => ({
    opacity: withTiming(isActive.value ? 1 : 0, {duration}),
  }));
};

export default useFadeIn;
