import { View, Text, Button, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { LinearBackground } from '../../Layouts/LinearBackground';
import { NavigationProp } from '@react-navigation/native';

interface RegisterProps {
    navigation: NavigationProp<Record<string, object | undefined>>;
}

interface InputProps {
    selectedButton: string;
}

const InputsBox = ({ selectedButton }: InputProps) => {
    if (selectedButton === 'driver') {
        return <DriverInputs />;
    } else if (selectedButton === 'client') {
        return <ClientInputs />;
    } else {
        return null;
    }
};

const TitleBox = ({ selectedButton }: InputProps) => {
        if (selectedButton === 'driver') {
            return <Text> Hi Driver. Write your info to continue!</Text>;
        } else if (selectedButton === 'client') {
            return <Text> Hi Client. Write your info to continue!</Text>;
        } else {
            return <Text> Hi! Select what type of user you are, please </Text>;
        }

};

const DriverInputs = () => {
    return (
        <View>
            <Text>Driver Inputs</Text>
        </View>
    );
};

const ClientInputs = () => {
    return (
        <View>
            <Text>Client Inputs</Text>
        </View>
    );
};


const RegisterScreen = ({navigation}: RegisterProps) => {
    const [selectedButton, setSelectedButton] = useState('');

    return (
        <LinearBackground
        colors={['#4FB0CE', 'rgba(79, 176, 206, 0.0422836)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
        >
            <View style = {styles.titleBox}>

                {/* {titleBoxContent} */}
                <TitleBox selectedButton={selectedButton}/>

            </View>

            <View style = {styles.selectionUserType}>

                <View style = {styles.selectionUserTypeButtonDriver}>
                    <Button title="driver" onPress={() => setSelectedButton('driver')}
                color={selectedButton === 'driver' ? '#718CA3' : '#45769E'}/>
                </View>

                <View style = {styles.selectionUserTypeButtonClient}>
                    <Button title="client" onPress={() => setSelectedButton('client')}
                color={selectedButton === 'client' ? '#718CA3' : '#45769E'} />
                </View>
            </View>

            <View style = {styles.inputsBox}>
                <InputsBox selectedButton={selectedButton} />
            </View>

            <Button title="Press me" onPress={() => navigation.navigate('LoginScreen')} />

        </LinearBackground>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    backGround: {
      // backgroundColor: '#4FB0CE',
      // mixBlendMode: 'normal',
      // height: '100%',
        flex: 1,
    },

    gradient: {
        flex: 1,
    },

    titleBox: {
        // backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputsBox: {
        flex: 5,
        alignItems: 'center',
        paddingTop: '2%',
    },

    selectionUserType: {
        flex: 0.5,
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    selectionUserTypeButtonDriver: {
        width: '40%',
    },

    selectionUserTypeButtonClient: {
        width: '40%',
    },

});
