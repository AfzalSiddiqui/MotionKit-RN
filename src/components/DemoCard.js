import React from 'react';
import {Text, StyleSheet} from 'react-native';
import AnimatedView from '../core/AnimatedView';

const DemoCard = ({title, subtitle = 'Tap to animate', effect, trigger = 'onTap', style}) => (
  <AnimatedView effect={effect} trigger={trigger} style={[styles.card, style]}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </AnimatedView>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
  },
});

export default DemoCard;
