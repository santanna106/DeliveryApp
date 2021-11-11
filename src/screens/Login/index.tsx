import { valueToNode } from '@babel/types';
import { Formik } from 'formik';
import React from 'react';
import { SafeAreaView,View } from 'react-native';
import {Card,TextInput,Button, Text} from 'react-native-paper';

import {loginForm} from './login.form';
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
                        <Formik initialValues={{email:"",password:""}}
                                onSubmit={login}
                                validationSchema={loginForm}
                                >
                                    {({handleSubmit,handleChange,errors,setFieldTouched,touched,values}) => (
                                        <>
                                            <TextInput 
                                               label="Email" 
                                               keyboardType="email-address"
                                               onChangeText={handleChange('email')}
                                               onFocus={() => setFieldTouched('email')}
                                             />
                                             {
                                                touched.email && errors.email ?
                                                    <Text style={{color: "white",backgroundColor:"red"}} > 
                                                        {errors.email}
                                                    </Text>
                                                    : null
                                             }
                                             
                                            <TextInput 
                                                label="Password" 
                                                secureTextEntry={true}
                                                onChangeText={handleChange('password')}
                                                onFocus={() => setFieldTouched('password')}
                                            />
                                             {
                                                touched.password && errors.password ?
                                                    <Text style={{color: "white",backgroundColor:"red"}} > 
                                                        {errors.password}
                                                    </Text>
                                                    : null
                                             }
                                            <Button style={styles.cardButton}
                                                    uppercase={false}
                                                    disabled={values.email === '' || errors.email ? true : false}
                                            >
                                                Forgot email/password
                                            </Button>
                                            <Button style={styles.cardButton} mode="contained" onPress={handleSubmit} testID="loginButton">Login</Button>
                                            <Button style={styles.cardButton} onPress={register} >Register</Button>
                                        </>
                                    )}
                            
                        </Formik>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}

