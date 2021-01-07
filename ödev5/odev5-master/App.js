/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import NewsItem from './NewsItem'

import * as data from './News'

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {
          data.news.map((item, index) => {
            return (
              <NewsItem
                key={index}
                title={item.baslik}
                description={item.aciklama}
                color={item.color}
              />
            )
          })
        }
      </ScrollView>
    </View>
  );
};

