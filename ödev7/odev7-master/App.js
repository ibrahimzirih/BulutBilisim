import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Dimensions, TextInput, Alert } from 'react-native';
import axios from 'axios';

export default function App() {

  const searchApi = 'https://developers.zomato.com/api/v2.1/search';
  const menuApi = 'https://developers.zomato.com/api/v2.1/dailymenu'

  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchText, setSearchText] = useState('');

  const Loading = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color='#000' size='large' />
      </View>
    )
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{
        height: Dimensions.get('window').height * 0.06,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 5
      }}
        onPress={() => getMenu(item.restaurant.R.res_id)}
      >
        <Text style={{ left: 12 }}>{item.restaurant.name}</Text>
      </TouchableOpacity>
    )
  }

  const renderMenu = ({ item, index }) => {
    return (
      <View style={{
        height: Dimensions.get('window').height * 0.06,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 5
      }}>
        <Text style={{ left: 12, fontWeight: 'bold' }}>{item.name}</Text>
        {
          item.dishes.map((dItem, dIndex) => {
            return (
              <Text style={{ left: 12 }}>{dItem.name}</Text>
            )
          })
        }
      </View>
    )
  }

  function searchRestaurant(text) {
    setLoading(true);
    setSearchText(text);
    getData(text);
  }

  function getData(text) {
    try {
      axios.get(searchApi, {
        headers: {
          'user-key': 'b30ee1b52768b435866a1cc5c048c97f'
        },
        params: {
          entity_type: 'city',
          q: text,
          sort: 'rating',
          order: 'desc'
        }
      })
        .then(res => {
          setRestaurants(res.data.restaurants);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        })
    }
    catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }

  function getMenu(id) {
    try {
      axios.get(menuApi, {
        headers: {
          'user-key': 'b30ee1b52768b435866a1cc5c048c97f'
        },
        params: {
          res_id: id
        }
      })
        .then(res => {
          setSelectedRestaurant(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
          Alert.alert('Uyarı', err.response.data.message);
        })
    }
    catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }

  return (
    <View style={{
      flex: 1,
    }}>
      <TextInput style={{
        height: 40,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: 12,
        elevation: 5,
      }}
        placeholder='Restoran ara...'
        onChangeText={(text) => searchRestaurant(text)} />

      {
        loading ? <Loading /> :
          selectedRestaurant ?
            <View>
              {selectedRestaurant &&
                <View style={{
                  height: Dimensions.get('window').height * 0.4,
                  width: '90%',
                  alignSelf: 'center',
                  backgroundColor: 'white',
                  elevation: 5,
                  borderRadius: 8,
                  justifyContent: searchText.trim() === '' ? 'center' : 'flex-start',
                  alignItems: searchText.trim() === '' ? 'center' : 'flex-start'
                }}>
                  <FlatList
                    data={selectedRestaurant.daily_menu}
                    renderItem={renderMenu}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>}
              <View style={{ height: Dimensions.get('window').height * 0.4, width: '90%', alignContent: 'center' }}>
                <FlatList
                  data={restaurants}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View> :
            <FlatList
              data={restaurants}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
      }




    </View>
  )
}