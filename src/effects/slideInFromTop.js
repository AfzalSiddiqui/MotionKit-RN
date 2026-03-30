import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useSlideInFromTop = (isActive, duration = 500) => {
  return useAnimatedStyle(() => ({
    transform: [
      {translateY: withTiming(isActive.value ? 0 : -300, {duration})},
    ],
    opacity: withTiming(isActive.value ? 1 : 0, {duration}),
  }));
};

export default useSlideInFromTop;
