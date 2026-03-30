import React from 'react';
import {Text, StyleSheet} from 'react-native';
import AnimatedView from '../core/AnimatedView';

const DemoLabel = ({text, effect, trigger = 'onMount', style}) => (
  <AnimatedView effect={effect} trigger={trigger} style={[styles.label, style]}>
    <Text style={styles.text}>{text}</Text>
  </AnimatedView>
);

const styles = StyleSheet.create({
  label: {
    padding: 8,
  },
  text: {
    fontSize: 15,
  },
});

export default DemoLabel;
