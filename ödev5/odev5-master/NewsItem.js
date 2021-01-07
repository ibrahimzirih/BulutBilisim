import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';

export default function NewsItem(props) {
    return (
        <View style={{
            backgroundColor: props.color,
            height: Dimensions.get('window').height * 0.3,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 8,
            margin: 12,
            elevation: 4
        }}>
            <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#fff',
                margin: 12
            }}>{props.title}</Text>
            <Text style={{
                margin: 12,
                color: '#fff',
                fontWeight: '400'
            }}>{props.description}</Text>
        </View>
    )
}