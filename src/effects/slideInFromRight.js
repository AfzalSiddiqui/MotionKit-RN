import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useSlideInFromRight = (isActive, duration = 500) => {
  return useAnimatedStyle(() => ({
    transform: [
      {translateX: withTiming(isActive.value ? 0 : 300, {duration})},
    ],
    opacity: withTiming(isActive.value ? 1 : 0, {duration}),
  }));
};

export default useSlideInFromRight;
