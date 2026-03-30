import {useAnimatedStyle, withRepeat, withSequence, withTiming} from 'react-native-reanimated';

export const useShake = (isActive) => {
  return useAnimatedStyle(() => ({
    transform: [
      {
        translateX: isActive.value
          ? withRepeat(
              withSequence(
                withTiming(10, {duration: 50}),
                withTiming(-10, {duration: 50}),
                withTiming(0, {duration: 50}),
              ),
              3,
              false,
            )
          : 0,
      },
    ],
  }));
};

export default useShake;
