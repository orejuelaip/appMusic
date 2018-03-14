import React, { Component } from 'react';
import Artistlist from './artistlist';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { getArtists } from './api-client'

export default class App extends Component {

    state = {
      artists: []
    }

    componentDidMount() {
      getArtists()
        .then(data => this.setState({ artists: data }))
    }

    render() {
      const artists = this.state.artists

      return (
        <Artistlist artists={artists} />
      )

    }
}

    // this.state.isLoggedIn ?
    //         <Inicio 
    //           onLogoutPress={() => this.setState({isLoggedIn: false})}
    //         />
    //     :
    //         <Login 
    //           onLoginPress={() => this.setState({isLoggedIn: true})}
    //         />
    //  <ScrollView style={styles.container}>
    //     {Array(500).fill(artist).map( artist => {
    //       return <ArtistBox artist={artist} />
    //     })}
    //   </ScrollView>