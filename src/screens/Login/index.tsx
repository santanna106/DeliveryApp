import React from 'react';
import { Alert, SafeAreaView,View } from 'react-native';
import {Card,TextInput,Button} from 'react-native-paper';

import {styles} from './styles';

interface LoginProps {
    navigation:any
}

export const Login:React.FC<LoginProps>  = (props:LoginProps) => {

    const login = () => props.navigation.navigate("Home");
    const register = () => props.navigation.navigate("Register");

    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.view}>
                <Card>
                    <Card.Title title="Delivery App" titleStyle={styles.cardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput label="Email" keyboardType="email-address"></TextInput>
                        <TextInput label="Password" secureTextEntry={true}></TextInput>
                        <Button style={styles.cardButton} uppercase={false}>Forgot email/password</Button>
                        <Button style={styles.cardButton} mode="contained" onPress={login}>Login</Button>
                        <Button style={styles.cardButton} onPress={register} >Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}

