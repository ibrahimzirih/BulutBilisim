import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  View,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';

export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    try {
      const apiCall = await fetch('https://jsonplaceholder.typicode.com/posts');
      const apiData = await apiCall.json();
      setData(apiData);
    }
    catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{
        height: Dimensions.get('window').height * 0.3,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 8,
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center'
      }} onPress={() => onPressItem(item, index)}>
        {
          item.display ?
            <View style={{
              height: '90%',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
            :
            <Text>Post - {index + 1}</Text>}
      </TouchableOpacity>
    )
  }

  function onPressItem(item, index) {
    data[index].display = data[index].display ? !data[index].display : true;
    setData([...data]);
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

