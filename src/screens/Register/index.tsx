import React from 'react';
import { SafeAreaView,ScrollView,View } from 'react-native';
import {Appbar,TextInput,Button} from 'react-native-paper';

import Header from '../../components/Header'

import {styles} from './styles';

const Register:React.FC  = () => {
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
                    <Button mode="contained" style={styles.button}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Register;