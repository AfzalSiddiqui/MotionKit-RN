import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';

export const TRIGGERS = {
  onMount: 'onMount',
  onTap: 'onTap',
};

const AnimatedView = ({
  children,
  effect,
  trigger = TRIGGERS.onMount,
  style,
  ...props
}) => {
  const isActive = useSharedValue(0);
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    if (trigger === TRIGGERS.onMount) {
      isActive.value = 1;
    }
  }, []);

  const animatedStyle = effect(isActive);

  const handleTap = () => {
    if (trigger === TRIGGERS.onTap) {
      isActive.value = tapped ? 0 : 1;
      setTapped(!tapped);
    }
  };

  if (trigger === TRIGGERS.onTap) {
    return (
      <TouchableWithoutFeedback onPress={handleTap}>
        <Animated.View style={[style, animatedStyle]} {...props}>
          {children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <Animated.View style={[style, animatedStyle]} {...props}>
      {children}
    </Animated.View>
  );
};

export default AnimatedView;
