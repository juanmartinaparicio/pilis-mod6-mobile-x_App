import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Dimensions} from 'react-native';

const WIDTH= Dimensions.get('window').width;
const HEIGHT= 150;

const SimpleModal=()=>{
    return(
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
            <View styles= {styles.modal}>
                <View style={styles.textView}>
                    <Text style={styles.text}> Ejemplo</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
    },
    modal: {
        height: HEIGHT,
        width: WIDTH -80,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    }, 
    textView: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        margin:5,
        fontSize:16,
        fontWeight: 'bold',

    }


})

export {SimpleModal}