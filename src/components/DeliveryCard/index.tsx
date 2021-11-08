import React from 'react';
import {View} from 'react-native';
import { Card, List, IconButton, Button} from 'react-native-paper';

import {styles} from './styles';

export const DeliveryCard = () => {
    return (
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
            )
}