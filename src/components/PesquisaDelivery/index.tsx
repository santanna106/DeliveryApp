import React from 'react';
import {View} from 'react-native';
import {Title,ActivityIndicator,Button} from 'react-native-paper';

import {styles} from './styles';

export const PesquisaDelivery = () => {
    return (
        <View style={styles.flexcentercolumn}>
             <ActivityIndicator
                  color={styles.icon.color} 
                  animating={true} />
           <Title style={styles.title}>Searching for a delivery person in your region</Title>
           <Button style={styles.cancelDelivertButton} mode="contained">Cancel</Button>
        </View>
    )
}