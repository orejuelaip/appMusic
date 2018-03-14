import React, { Component } from 'react';
import ArtistBox from './artistbox';
// import Login from './src/Login/login';
// import Inicio from './src/Inicio/inicio';
import {
    ListView,
    Text,
    View,
    StyleSheet
} from 'react-native';


export default class ArtistList extends Component {
 
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds
    };
  }
  componentDidMount() {
    this.updateDataSource(this.props.artists)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.artists !== this.props.artists) {
      this.updateDataSource(newProps.artists)
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }
    render() {
      return (
         <ListView
          dataSource={this.state.dataSource}
          renderRow={(artist) => <ArtistBox artist={artist} /> }
        />
      )
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },

});



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