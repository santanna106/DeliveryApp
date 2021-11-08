import React from 'react';
import { SafeAreaView,View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Header from '../../components/Header';

import {styles} from './styles';


export const AddAddres = () => {

    const destinations:number[] = [1,2] ;

    return (
        <SafeAreaView>
            <Header title="Address" hasBackButton={true} />
            <View style={styles.marginHorizontal}>
                <TextInput label="Origin" />
                {
                    destinations.map((destination:number,index:number) => 
                        <TextInput
                            key={`destination${index}`} 
                            label="Destination"
                            right= {
                                destinations.length > 1 ? 
                                    <TextInput.Icon name="close" 
                                        color={styles.buttonIconRemove.color}
                                        style={styles.buttonIconRemove}/>
                                :
                                null
                            }
                            
                            /> 
                    )
                }
               
            </View>
            <View style={styles.buttonIconAdd}>
                <Button icon="plus" labelStyle={styles.buttonAddLabel}></Button>
            </View>
            <Button mode="contained" uppercase={false} style={styles.readyButton} labelStyle={styles.readyButtonLabel}>
                Ready
            </Button>
        </SafeAreaView>
    )
}