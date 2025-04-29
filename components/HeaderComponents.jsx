import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GrandHotel_400Regular, useFonts } from '@expo-google-fonts/grand-hotel'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function HeaderComponents() {
    const [isLoaded] = useFonts({
        GrandHotel_400Regular
    });
    if (!isLoaded) {
        return null
    }

    return (
        <View style={styles.HeaderConteainer}>
            <View>
                <Text style={[styles.WhiteText, styles.HeaderText, { fontFamily: "GrandHotel_400Regular" }]}>Instagram</Text>
            </View>
            <View>
                <FontAwesomeIcon icon={faHeart} style={{color: "white", marginRight: 25}} size={25} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderConteainer: {
        marginTop: 5
    },
    WhiteText: {
        color: 'white'
    },
    HeaderText: {
        fontSize: 35
    }
})