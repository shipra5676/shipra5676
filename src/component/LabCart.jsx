import { set } from 'lodash';
import React, {useState} from 'react';
import {Text, StyleSheet,TextInput,Button,View,Alert, Image,TouchableOpacity} from 'react-native';
import BackButton from '../component/BackButton';




  /** css starts */

  const labStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLabel :{
       
        paddingTop:30,
        fontSize:30,
        color: '#900c3f',
        fontWeight:"bold",
    },
    image: {
        paddingLeft:50,
        width: 70,
        height: 70,
        paddingTop:20,
        paddingBottom:20
    },
    imageTwo: {
        paddingLeft:50,
        width: 70,
        height: 70,
        marginTop:200,
        paddingBottom:20
    },
  });

export const LabCart = ({navigation}) =>{
    
    console.log("Navigation" +JSON.stringify(navigation));
    //Alert.alert('Please Enter Name'+navigation.params.paramKey)
    const goToProduct= () =>{
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        })    
    }
    const goToGift= () =>{
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        })
    }
    const goBackToLogin=()=>{
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        })
    }
    return <View >
         <BackButton goBack={goBackToLogin} />
            <View style={[labStyles.container]}>     
            <Text style={labStyles.textLabel}> Lab Cart</Text>
            </View> 
            <TouchableOpacity key="1"  onPress={goToProduct} style={labStyles.image} >
                <Image source={require('../img/category.png')} />
            </TouchableOpacity>
            <TouchableOpacity key="2"  onPress={goToGift} style={labStyles.imageTwo} >
                <Image source={require('../img/gift.png')} />
            </TouchableOpacity>
             
        
        </View>


}