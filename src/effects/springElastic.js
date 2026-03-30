import {useAnimatedStyle, withSpring} from 'react-native-reanimated';

export const useSpringElastic = (isActive) => {
  return useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(isActive.value ? 1 : 0.3, {
          damping: 4,
          stiffness: 170,
        }),
      },
    ],
  }));
};

export default useSpringElastic;
