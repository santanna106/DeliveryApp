import React from 'react';
import { SafeAreaView,ScrollView,View } from 'react-native';
import {TextInput,Button,Card} from 'react-native-paper';
import Header from '../../components/Header'
import {styles} from './styles';


interface RegisterProps {
    navigation:any
}

export const Register:React.FC<RegisterProps> = (props:RegisterProps) => {

    const registro = () => props.navigation.navigate("Home");

    return (
        <SafeAreaView>
            <ScrollView>
                <Header title="Register" />
                <View style={styles.content}>
                    <TextInput label="Name" />
                    <TextInput label="Email" keyboardType="email-address" />
                    <TextInput label="Passoword" secureTextEntry={true} 
                        right={ <TextInput.Icon 
                                    name="eye-off-outline" 
                                    color={styles.icon.color} 
                                    /> 
                        } 
                    />
                    <TextInput label="Confirm Passoword" secureTextEntry={true}
                      right={<TextInput.Icon name="eye-off-outline" color={styles.icon.color} />}
                    />
                    <TextInput label="Phone Number" keyboardType="phone-pad" />
                    <Card.Content>
                        <Button mode="contained" 
                                style={styles.button} 
                                onPress={registro}
                            >
                            Register
                        </Button>
                    </Card.Content>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

