import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useSlideOutToLeft = (isActive, duration = 500) => {
  return useAnimatedStyle(() => ({
    transform: [
      {translateX: withTiming(isActive.value ? -300 : 0, {duration})},
    ],
    opacity: withTiming(isActive.value ? 0 : 1, {duration}),
  }));
};

export default useSlideOutToLeft;
