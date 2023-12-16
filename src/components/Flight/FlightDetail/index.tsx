import React from 'react'
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Header';
import {useSelector} from "react-redux"

const FlightDetail = () => {
  const userData = useSelector(state => state.counter);
  return (
    <SafeAreaView>
        <Header name={userData.name} image={true}/>
    </SafeAreaView>
  )
}

export default FlightDetail ;
