import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function UserDetailsScreen(props:any) {
    
    const { userName, userEmail, userPassword, userPhone } = props.route.params
    return (
       <View style={styles.container}> 
           <Text style={styles.text}>Username: {userName}</Text>
           <Text style={styles.text}>Email: {userEmail}</Text>
           <Text style={styles.text}>Password: {userPassword}</Text>
           <Text style={styles.text}>Phone: {userPhone}</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#f0f8ff',
    },
    text: {
        color: 'white',
        backgroundColor: "mediumseagreen",
        fontSize: 18,
        margin: 10,
        padding: 11,
        borderRadius: 5,
        width: '80%'
    }
})

export default UserDetailsScreen;