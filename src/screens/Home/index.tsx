import React from 'react';
import {SafeAreaView,Image,View, ColorPropType} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FAB,Card, List, IconButton, Button, ActivityIndicator ,Title} from 'react-native-paper';


import {styles} from './styles';


const LATITUDE_DELTA:number = 0.09;
const LOGITUDE_DELTA:number = 0.04; 

export const Home:React.FC = () => {

    const state:number = 2

    return (
        <SafeAreaView style={styles.flex}>
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
                    state === 2 ?
                    <Card>
                        <Card.Content>
                            <List.Item
                                title="$ 15.00"
                                description="Total Price of Delivery"
                                left={() => <IconButton  
                                                icon="bike" 
                                                size={30}
                                                style={styles.icon} 
                                                color={styles.icon.color} />} 
                                right={() => 
                                    <View>
                                        <Button style={styles.cancelButton}>Cancelar</Button>
                                        <Button mode="contained">Confirmar</Button>
                                    </View>    
                                }
                            />
                        </Card.Content>
                    </Card>
                :
                  null
                }

                {
                    state === 1 ?
                        <FAB icon="plus" style={styles.fab}/>
                    :
                      null
                }
                {
                    state === 3?
                        <View style={styles.flexcentercolumn}>
                            <ActivityIndicator
                               color={styles.icon.color} 
                               animating={true} />
                            <Title style={styles.title}>Searching for a delivery person in your region</Title>
                            <Button style={styles.cancelDelivertButton} mode="contained">Cancel</Button>
                        </View>
                    :
                      null
                }
                
            
        </SafeAreaView>
    )
}

