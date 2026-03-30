import {useAnimatedStyle, withSpring} from 'react-native-reanimated';

export const useBounce = (isActive) => {
  return useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withSpring(isActive.value ? 0 : -30, {
          damping: 4,
          stiffness: 300,
        }),
      },
    ],
  }));
};

export default useBounce;
