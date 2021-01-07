import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { info } from './info';

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, margin: 18 }}>Kişisel Bilgiler</Text>
      <View style={{
        height: Dimensions.get('window').height * 0.15,
        width: '90%',
        alignSelf: 'center', borderRadius: 8,
        elevation: 5,
        margin: 12,
        backgroundColor: 'white'
      }}>
        <Text style={{
          fontWeight: '500',
          fontSize: 18,
          margin: 12
        }}>{info.ad} {info.soyad}, {info.yas}</Text>
        <Text style={{
          fontWeight: '500',
          fontSize: 18,
          marginLeft: 12
        }}>{info.memleket}</Text>
        <Text style={{
          fontWeight: '500',
          fontSize: 18,
          marginLeft: 12
        }}>{info.lise}</Text>
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 24, margin: 18 }}>Deneyimler</Text>
      {
        info.deneyim.map((item, index) => {
          return (
            <View style={{
              height: Dimensions.get('window').height * 0.15,
              width: '90%',
              alignSelf: 'center', borderRadius: 8,
              elevation: 5,
              margin: 12,
              backgroundColor: 'white'
            }}>
              <Text style={{
                fontWeight: '500',
                fontSize: 18,
                margin: 12
              }}>{item.firmaAdi}</Text>
              <Text style={{
                fontWeight: '500',
                fontSize: 18,
                marginLeft: 12
              }}>{item.title}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
};
