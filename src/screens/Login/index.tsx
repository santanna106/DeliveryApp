import React from 'react';
import { SafeAreaView,View } from 'react-native';
import {Card,TextInput,Button} from 'react-native-paper';

import {styles} from './styles';

const Login:React.FC  = () => {
    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.view}>
                <Card>
                    <Card.Title title="Delivery App" titleStyle={styles.cardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput label="Email" keyboardType="email-address"></TextInput>
                        <TextInput label="Password" secureTextEntry={true}></TextInput>
                        <Button style={styles.cardButton} uppercase={false}>Forgot email/password</Button>
                        <Button style={styles.cardButton}mode="contained">Login</Button>
                        <Button style={styles.cardButton}>Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}

export default Login;