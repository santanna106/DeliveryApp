import React from 'react';
import {SafeAreaView} from 'react-native';
import MapView from 'react-native-maps';
import { Title } from 'react-native-paper';

const LATITUDE_DELTA:number = 0.09;
const LOGITUDE_DELTA:number = 0.04; 

export const Home:React.FC = () => {

    return (
        <SafeAreaView style={{flex:1}}>
            <MapView
                style={{flex:1}}
                initialRegion={{
                    latitude:-3.7222,
                    longitude:-38.515,
                    latitudeDelta:LATITUDE_DELTA,
                    longitudeDelta:LOGITUDE_DELTA
                }} 
            >
            </MapView>
        </SafeAreaView>
    )
}

