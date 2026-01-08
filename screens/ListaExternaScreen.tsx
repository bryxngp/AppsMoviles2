import { StyleSheet, Text, View , FlatList} from 'react-native'

import React, { useEffect, useState } from 'react'

import Card from '../components/Card';

export default function ListaExternaScreen() {

  const [data, setData] = useState([])

  async function leer() {
    const resp = await fetch('https://api.sampleapis.com/futurama/characters');
    const json = await resp.json();
    setData(json);
  }

  useEffect(() => {
    leer()

    //console.log(data);

  }, [])



  return (
    <View>
      <Text>ListaExternaScreen</Text>
      <FlatList
      data={data}
      renderItem={({item})=>
      <Card info={item}/>
      }
      />

      
    </View>
  )
}

const styles = StyleSheet.create({})