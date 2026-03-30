import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useSlideInFromBottom = (isActive, duration = 500) => {
  return useAnimatedStyle(() => ({
    transform: [
      {translateY: withTiming(isActive.value ? 0 : 300, {duration})},
    ],
    opacity: withTiming(isActive.value ? 1 : 0, {duration}),
  }));
};

export default useSlideInFromBottom;
