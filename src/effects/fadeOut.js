import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useFadeOut = (isActive, duration = 500) => {
  return useAnimatedStyle(() => ({
    opacity: withTiming(isActive.value ? 0 : 1, {duration}),
  }));
};

export default useFadeOut;
