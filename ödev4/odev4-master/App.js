import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { data } from './data'

export default function App() {

  const [regions, setRegions] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    setRegions(data);
  }, [])

  const renderRegions = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.region} onPress={() => onChangeRegion(item, index)}>
        <Text>{item.bolge_adi}</Text>
      </TouchableOpacity>
    )
  }

  const renderCites = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.city} onPress={() => console.log(typeof regions)}>
        <View style={styles.cityLeft}>
          <Text style={styles.cityNumber}>{item.plaka}</Text>
        </View>
        <View style={styles.cityRight}>
          <Text style={styles.cityTitle}>{item.il_adi}</Text>
          <Text style={styles.citySubtitle}>{item.nufus}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  function onChangeRegion(item, index) {
    setSelectedRegion(item);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bölgeler</Text>
      <View style={styles.section}>
        <FlatList
          data={regions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderRegions}
        />
      </View>
      <Text style={styles.title}>Şehirler</Text>
      <View style={styles.section}>
        <FlatList
          data={selectedRegion ? selectedRegion.iller : []}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCites}
        />
      </View>
    </View>
  )
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 24,
    margin: 12
  },
  section: {
    height: height * 0.35,
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 4
  },
  region: {
    height: height * 0.05,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  city: {
    height: height * 0.1,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    margin: 8,
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row'
  },
  cityLeft: {
    height: '100%',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cityNumber: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  cityTitle: {
    fontSize: 20,
    fontWeight: '500'
  },
  citySubtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'grey'
  }
});