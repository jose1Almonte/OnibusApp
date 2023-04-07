import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
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
        <ScrollView style = {styles.scrollContainer} contentContainerStyle={styles.contentContainer}>

        <View style = {styles.multipleInputBox}>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Name</Text>
                <TextInput style = {styles.littleInput} placeholder="Your first and last name" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Surname</Text>
                <TextInput style = {styles.littleInput} placeholder="All your surname" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Email</Text>
                <TextInput style = {styles.littleInput} placeholder="Ex. Oni@email.com" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Password</Text>
                <TextInput style = {styles.littleInput} placeholder="min 6 carts." placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>ConfirmPassword</Text>
                <TextInput style = {styles.littleInput} placeholder="confirm your password" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Born date</Text>
                <TextInput style = {styles.littleInput} placeholder="Your born date" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>CI</Text>
                <TextInput style = {styles.littleInput} placeholder="CI" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>CI picture</Text>
                <TextInput style = {styles.littleInput} placeholder="Your CI picture" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Number plaque</Text>
                <TextInput style = {styles.littleInput} placeholder="Number plaque" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>doctor certified</Text>
                <TextInput style = {styles.littleInput} placeholder="Your certified" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Secure RCV</Text>
                <TextInput style = {styles.littleInput} placeholder="Your secure RCV" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Home address</Text>
                <TextInput style = {styles.littleInput} placeholder="Your Home address" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Circulation carnet</Text>
                <TextInput style = {styles.littleInput} placeholder="Your circulation carnet" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Personal selfie</Text>
                <TextInput style = {styles.littleInput} placeholder="Your personal selfie" placeholderTextColor={'grey'}/>
            </View>
            <View style={styles.singleSendButtonBox}>
                <Button title="Send info"/>
            </View>

        </View>
        </ScrollView>
    );
};

const ClientInputs = () => {
    return (
        <>
            <Text>Client Inputs</Text>
        </>
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

    scrollContainer: {
        width: '100%',
        flex: 1,
        // paddingBottom: 30 // ajuste esto según sea necesario para evitar que el contenido se corte en la parte inferior
      },

    contentContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        // paddingVertical: 16,
        // paddingHorizontal: 20,
    },

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
        // backgroundColor: 'orange',
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

    multipleInputBox: {
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
    },

    singleInputBox: {
        // backgroundColor: 'red',
        width: '65%',
        paddingTop: 12.5,
        paddingBottom: 12.5,
    },
    
    littleTitle: {
        color: 'black',
        fontSize: 20,
    },

    littleInput: {
        width: '100%',
        backgroundColor: '#FFFBED',
        borderRadius: 5,
        color: 'black',
    },

    // fadingContainer: {
    //     flex: 1,
    //     backgroundColor: 'white',
    //     paddingBottom: 20,
    //     paddingHorizontal: 10,
    //     marginHorizontal: 10,
    //     borderRadius: 10,
    //     shadowColor: '#000',
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    //     elevation: 5,
    // },

    // fadingView: {
        //     position: 'absolute',
        //     bottom: 0,
        //     left: 0,
        //     right: 0,
        //     height: 20,
        //     backgroundColor: 'white',
        //     opacity: 0.5,
        // },

    singleSendButtonBox: {
        width: '35%',
        paddingTop: 14.5,
        paddingBottom: 12.5,
    },

    });
