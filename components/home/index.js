/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { View } from 'react-native';
import TheMap from '../map';
import SearchBar from '../searchBar';
import SearchBarDestination from '../searchBarDestination';
import styles from './styles';
import SwitchCampuses from '../switchCampuses';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 45.492409,
        longitude: -73.582153,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      },
      isVisible: true,
    };
  }

  updateRegion = (newRegion) => {
    this.setState({
      region: {
        latitude: newRegion.latitude,
        longitude: newRegion.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }
    });
  }

  changeVisibilityTo = (boolie) => {
    this.setState({ isVisible: boolie });
  }

  render() {
    return (
      <View style={styles.container}>
        <TheMap updatedRegion={this.state.region} />
        <SearchBar callBack={this.updateRegion} changeVisibilityTo={this.changeVisibilityTo} />
        {this.state.isVisible && <SwitchCampuses callBack={this.updateRegion} />}
        <SearchBarDestination changeVisibilityTo={this.changeVisibilityTo} />
      </View>
    );
  }
}
