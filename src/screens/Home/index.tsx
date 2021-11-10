import React from 'react';
import {SafeAreaView,Image,View, ColorPropType, Alert} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FAB} from 'react-native-paper';
import {DeliveryCard} from '../../components/DeliveryCard';
import {PesquisaDelivery} from '../../components/PesquisaDelivery';
import Header from '../../components/Header';



import {styles} from './styles';


const LATITUDE_DELTA:number = 0.09;
const LOGITUDE_DELTA:number = 0.04; 

interface HomeProps{
    navigation:any
}

export const Home:React.FC<HomeProps> = (props:HomeProps) => {

    const goToDeliveryRoute = () => props.navigation.navigate("AddAddres")
      

    const state:number = 1

    return (
        <SafeAreaView style={styles.flex}>
            <Header title="Delivery App" navigation={props.navigation} />
            <MapView
                style={styles.flex}
                initialRegion={{
                    latitude:-3.7222,
                    longitude:-38.515,
                    latitudeDelta:LATITUDE_DELTA,
                    longitudeDelta:LOGITUDE_DELTA
                }} 
            >
                {
                    state === 1 ?
                        <>
                            <Marker
                                description="Delivery person 1"
                                coordinate={{latitude:-3.723,longitude:-38.515}}
                            >
                                <Image source={require('../../../assets/cyclist-icon.png')} style={styles.markerImage} />
                            </Marker>
                            <Marker
                                description="Delivery person 1"
                                coordinate={{latitude:-3.743,longitude:-38.515}}
                            >
                                <Image source={require('../../../assets/cyclist-icon.png')} style={styles.markerImage} />
                            </Marker>
                            <Marker
                                description="Delivery person 1"
                                coordinate={{latitude:-3.733,longitude:-38.515}}
                            >
                                <Image source={require('../../../assets/cyclist-icon.png')} style={styles.markerImage} />
                            </Marker>
                        </>
                    :
                        null
                }

                {
                    state === 2?
                        <>
                            <Marker
                                description="Origin"
                                coordinate={{latitude:-3.723,longitude:-38.515}}
                            >
                            </Marker>
                            <Marker
                                description="Destination"
                                coordinate={{latitude:-3.743,longitude:-38.515}}
                            >
                            </Marker>
                        </>
                    :
                        null
                }

               
              
            </MapView>

            {
                    state === 1 ?
                        <FAB icon="plus" style={styles.fab}
                        onPress={goToDeliveryRoute}
                        >
                            
                        </FAB>
                    :
                      null
                }

            {
                state === 2 ?
                  <DeliveryCard />
                :
                  null
                }

                

               
                {
                    state === 3?
                    <PesquisaDelivery />
                    :
                      null
                }


                
            
        </SafeAreaView>
    )
}

