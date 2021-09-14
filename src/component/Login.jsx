import { set } from 'lodash';
import React, {useState} from 'react';
import {Text, StyleSheet,TextInput,Button,View,Alert, Image,TouchableOpacity} from 'react-native';
import Logo from '../component/Logo';



/** Css */
const styles = StyleSheet.create({
    loginMainContainer: {
        paddingTop: 20,
        flex:1
    },
    loginContainerOne: {
     
      alignItems: 'center',
    },
    loginContainerTwo: {
       
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        paddingTop:20

    },
    textLabel :{
     
        paddingBottom:10,
        fontSize:30,
        color: '#900c3f',
        fontWeight:"bold",
    },
    textBox :{
       
        borderWidth:1,
        padding:10,
        fontSize:20,
        color: '#900c3f',
        
    }
  });
  /** css ends */

export const Login = ({navigation}) =>{
    const [userName,setUserName]= useState('');
    const validateUser= () =>{
        if(userName===''){
            Alert.alert('Please Enter Name')
        }else{
            navigation.navigate('LabCart', {
                paramKey: userName,
            })
        }
    }
    return <View  style={[styles.loginMainContainer]} >
            <View style={styles.loginContainerOne}>    
            <Text style={styles.textLabel}> User</Text>
       
            <Logo/>
            <View style={{width:'80%'}}>
            <TextInput style={styles.textBox} placeholder="Enter name" onChangeText={userName => setUserName(userName)}></TextInput>
            </View>
            <TouchableOpacity key="1"  onPress={validateUser} style={styles.image} >
                <Image source={require('../img/loginBtn.png')} />
            </TouchableOpacity>
            </View>  
        
    </View>


}