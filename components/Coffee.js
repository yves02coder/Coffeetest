import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, ActivityIndicator} from 'react-native';
import { Card } from 'react-native-elements'
const Coffee = (props) => {
    const image = { uri: "https://coffee.alexflipnote.dev/random" };


    return (
        <View >


            <View style={styles.itemLeft}>




                <Card >
                    <Card.Title> <Text style={styles.itemText}>{props.text}</Text></Card.Title>
                    <Card.Divider/>
                    <Card.Image source={ image} resizeMode="cover" style={styles.image}/>

                </Card>


            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    image: {

        justifyContent: "center",

        width: 200,
        height:200,
        padding: 50
    },
    card:{
        height:500,
        width:500,

    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
export default Coffee