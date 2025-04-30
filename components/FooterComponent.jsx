import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClapperboard, faHomeAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import hutaoImage from '../assets/hutao.jpg'


export default function FooterComponent() {
    return (
        <View style={styles.FooterContainer}>
            <FontAwesomeIcon icon={faHomeAlt} style={{ color: "white", marginRight: 27 }} size={25} />
            <FontAwesomeIcon icon={faSearch} style={{ color: "white", marginRight: 27 }} size={25} />
            <FontAwesomeIcon icon={faPlusSquare} style={{ color: "white", marginRight: 27 }} size={25} />
            <FontAwesomeIcon icon={faClapperboard} style={{ color: "white", marginRight: 27 }} size={25} />
            <Image source={hutaoImage} style={{ width: 30, height: 30, borderRadius: 50 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    FooterContainer: {
        backgroundColor: 'black',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    WhiteText: {
        color: 'white'
    },
    FooterText: {
        fontSize: 15
    }
})