import React from 'react';
import { SafeAreaView,View } from 'react-native';
import MapView from 'react-native-maps';
import { Card,List,Text,Avatar } from 'react-native-paper';
import Header from '../../components/Header';
import { styles } from './styles';

const LATITUDE_DELTA:number = 0.09;
const LOGITUDE_DELTA:number = 0.04; 

interface DeliveryProps{
    navigation:any;
}

export const Delivery:React.FC<DeliveryProps> = (props:DeliveryProps) => {
    
    return(
        <SafeAreaView style={styles.flex}>
            <Header title="Delivery Details" 
                    hasBackButton={true}
                    navigation={props.navigation}
            />
            <View style={styles.flex}>
                <MapView
                    style={styles.flex}
                    initialRegion={{
                        latitude:-3.7222,
                        longitude:-38.515,
                        latitudeDelta:LATITUDE_DELTA,
                        longitudeDelta:LOGITUDE_DELTA
                    }} 
                >
                </MapView>
            </View>
            <Card>
                <Card.Title titleStyle={styles.cardTitle} title={"99/99/9999"}
                right={() => <Text style={styles.price}>$ 30,00</Text>}></Card.Title>
                <Card.Content>
                    <List.Item title={"Gabriel Andrade"} 
                               description="53 deliveries"
                               left={()=> <Avatar.Image 
                                                size={52}
                                                source={{uri: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}}
                               />
                            }
                    />
                    <List.Item
                        title="Origin"
                        description="Origin Street,60"
                        left={() => <List.Icon icon="flag-outline" />}
                    />
                      <List.Item
                        title="Destination"
                        description="Destination Street,60"
                        left={() => <List.Icon icon="flag-checkered" />}
                    />
                </Card.Content>
            </Card>
        </SafeAreaView>
    );
}