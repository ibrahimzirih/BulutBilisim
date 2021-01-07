import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';

export default function App() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');

  function onPressSave() {
    if (name.trim() === '') {
      Alert.alert('Uyarı', 'Ad alanı boş geçilemez.')
    }
    else if (surname.trim() === '') {
      Alert.alert('Uyarı', 'Soyad alanı boş geçilemez.')
    }
    else if (age.trim() === '') {
      Alert.alert('Uyarı', 'Yaş alanı boş geçilemez.')
    }
    else if (mail.trim() === '') {
      Alert.alert('Uyarı', 'E-posta alanı boş geçilemez.')
    }
    else if (pass.trim() === '') {
      Alert.alert('Uyarı', 'Şifre alanı boş geçilemez.')
    }
    else if (rePass.trim() === '') {
      Alert.alert('Uyarı', 'Şifre Tekrar alanı boş geçilemez.')
    }
    else {
      if (pass.trim() === rePass.trim()) {
        Alert.alert('Başarılı', 'Bilgiler kaydedildi.')
      }
      else {
        Alert.alert('Hata', 'Şifreler eşleşmiyor.')
      }
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Üyelik Formu</Text>
        <TextInput style={styles.input} placeholder='Ad...' onChangeText={(text) => setName(text)} />
        <TextInput style={styles.input} placeholder='Soyad...' onChangeText={(text) => setSurname(text)} />
        <TextInput style={styles.input} placeholder='Yaş...' onChangeText={(text) => setAge(text)} />
        <TextInput style={styles.input} placeholder='E-posta...' onChangeText={(text) => setMail(text)} />
        <TextInput style={styles.input} placeholder='Şifre...' secureTextEntry onChangeText={(text) => setPass(text)} />
        <TextInput style={styles.input} placeholder='Şifre Tekrar...' secureTextEntry onChangeText={(text) => setRePass(text)} />
        <TouchableOpacity style={styles.button} onPress={onPressSave}>
          <Text style={styles.buttonText}>KAYDET</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 24
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    elevation: 5,
    margin: 8,
    borderRadius: 8
  },
  button: {
    height: Dimensions.get('window').height * 0.08,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});