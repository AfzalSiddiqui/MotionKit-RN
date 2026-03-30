import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

export const StaggeredItem = ({children, index, delay = 100, style}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    opacity.value = withDelay(index * delay, withTiming(1, {duration: 400}));
    translateY.value = withDelay(index * delay, withTiming(0, {duration: 400}));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{translateY: translateY.value}],
  }));

  return (
    <Animated.View style={[style, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default StaggeredItem;
