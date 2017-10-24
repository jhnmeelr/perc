/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

console.ignoredYellowBox = ['Remote debugger'];

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component<{}> {
  startGame = () => {
    console.log('Start game');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ScrollView style={styles.mainScrollWrapper}>
          <View style={styles.mainTitle}>
            <Text style={styles.mainHeading}>PERC</Text>
            <Text style={styles.mainDescription}>Math</Text>
          </View>
          <View style={styles.stats}>
            <View style={[styles.statsBlock, { borderRightColor: 'rgba(255, 255, 255, .3)' }]}>
              <Text style={styles.statsScore}>8,842</Text>
              <Text style={styles.statsDescription}>HIGH SCORE</Text>
            </View>
            <View style={styles.statsBlock}>
              <Text style={styles.statsScore}>96/300</Text>
              <Text style={styles.statsDescription}>DIFFICULTY</Text>
            </View>
          </View>
          <View style={styles.benefits}>
            <Text style={styles.benefitsHeading}>BENEFITS:</Text>
            <View style={styles.benefitsList}>
              <Text style={styles.benefitDescription}>Calculate complex percentages easily.</Text>
              <Text style={styles.benefitDescription}>Compute discounts and markups on products in your head.</Text>
              <Text style={styles.benefitDescription}>Become more confident using mental math.</Text>
            </View>
          </View>
        </ScrollView>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
          style={styles.linearGradient}
        />
        <View style={styles.playButton}>
          <TouchableOpacity onPress={this.startGame}>
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#76294f',
  },

  mainScrollWrapper: {
    flex: 1,
    padding: 10,
  },

  mainTitle: {
    alignItems: 'center',
    marginTop: 150,
  },
  mainHeading: {
    fontSize: 50,
    color: '#fff',
  },
  mainDescription: {
    fontSize: 26,
    color: 'rgba(255, 255, 255, .3)',
  },

  stats: {
    flexDirection: 'row',
    height: 150,
    marginTop: 100,
  },

  statsBlock: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, .3)',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },

  statsScore: {
    marginBottom: 6,
    fontSize: 30,
    color: '#fff',
  },

  statsDescription: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, .3)',
  },

  benefits: {
    marginTop: 40,
  },

  benefitsHeading: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, .3)',
  },

  benefitsList: {
    marginTop: 35,
    marginBottom: 180,
  },

  benefitDescription: {
    marginLeft: 100,
    marginBottom: 20,
    paddingRight: 20,
    paddingLeft: 15,
    fontSize: 18,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, .7)',
  },

  linearGradient: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: 180,
  },

  playButton: {
    position: 'absolute',
    bottom: 10,
    width: Dimensions.get('window').width * 0.95,
    borderRadius: 3,
    backgroundColor: '#04c2f9',
    overflow: 'hidden',
  },
  playButtonText: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 60,
    color: '#fff',
  },
});
