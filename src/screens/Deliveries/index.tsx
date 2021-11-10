import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Header from '../../components/Header';
import { styles } from './styles';

interface DeliveriesProps{
    navigation:any;
}

export const Deliveries:React.FC<DeliveriesProps> = (props:DeliveriesProps) => {
    const deliveries:number[] = [1,2,3]
    const goToDeliveryDetails = () => props.navigation.navigate("Delivery");
    return (
        <SafeAreaView>
            <Header title={"My Deliveries"} hasBackButton={true} navigation={props.navigation} />
            <FlatList
                data={deliveries}
                keyExtractor={(item,index) =>  `deliveries${index}`}
                renderItem={({item,index}) => 
                    <Card style={{...styles.card,...styles.cardStatus}} onPress={goToDeliveryDetails}>
                        <Card.Cover
                                source={{uri: "https://snazzy-maps-cdn.azureedge.net/assets/74-becomeadinosaur.png?v=20170626082939"}}
                        />
                        <Card.Title 
                            title="99/99/9999"
                            subtitle="Delivery person name"
                            right={() => <Text style={styles.price}>$ 30,00</Text>}
                            titleStyle={styles.cardTitle}
                        />
                    </Card>
            }/>
            

        </SafeAreaView>
    );
}