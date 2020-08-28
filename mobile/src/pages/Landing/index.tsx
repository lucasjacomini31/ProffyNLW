import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { RectButton } from 'react-native-gesture-handler';


import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';



function Landing() {
    const { navigate } = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response =>{
            const {total} = response.data;

            setTotalConnections(total);
        })
    } , [])

    function hadleNavigationToGiveClasses(){
        navigate('GiveClasses');
    }

    function hadleNavigationToStudyPages(){
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}></Image>
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={hadleNavigationToStudyPages} 
                    style={[styles.button , styles.buttonPrimary]}>
                    <Image source={studyIcon}></Image>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                    onPress={hadleNavigationToGiveClasses}  
                    style={[styles.button , styles.buttonSecondary]}>
                    <Image source={giveClasses}></Image>
                    <Text style={styles.buttonText}  >
                    Dar Aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} Conexões já realizadas {' '}
                <Image source={heartIcon}></Image>
            </Text>

        </View>

        
    );
}

export default Landing;