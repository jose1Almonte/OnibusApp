import { View, Text, Button, StyleSheet, TextInput, ScrollView, Alert, Image } from 'react-native';
import React, {useState} from 'react';
import { LinearBackground } from '../../Layouts/LinearBackground';
import { NavigationProp } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';



interface RegisterProps {
    navigation: NavigationProp<Record<string, object | undefined>>;
}

interface InputProps {
    selectedButton: string;
}

// interface DateProps {
//     date: Date;
// }

// interface writingDateProps{
//     writingDate: boolean;
// }

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

const handleOnPressDate = ({ writingDate, setWritingDate }: { writingDate: boolean; setWritingDate: (value: boolean) => void; }) => {
    if (!writingDate) {
      setWritingDate(true);
    }
  };

const DatePickerBox = ({ writingDate, date, setDate, showDate, setShowDate, setWritingDate }: { writingDate: boolean; date: Date; setDate: (value: Date) => void; showDate: boolean;setShowDate: (value: boolean) => void; setWritingDate: (value: boolean) => void; }) => {

    const tempDate = new Date();
    if (writingDate) {

        return <DateTimePicker
        style={styles.littleInput}
        value={new Date()}
        mode="date"
        onChange={(event, selectedDate) => {
            const currentDate = selectedDate || tempDate;
            // console.log('---------------------------------------------');
            // console.log('Date de la variable: ', currentDate);
            // console.log('Date actual: ', tempDate);
            // console.log('Year === 18?: ', tempDate.getFullYear() - currentDate.getFullYear() === 18);
            const cond1 = !(currentDate.getDay() === tempDate.getDay() && currentDate.getMonth() === tempDate.getMonth() && currentDate.getFullYear() === tempDate.getFullYear());
            const cond2 = ((((tempDate.getFullYear() - currentDate.getFullYear()) > 21)) || (((tempDate.getFullYear() - currentDate.getFullYear()) === 21)  && (tempDate.getMonth() > currentDate.getMonth())) || (((tempDate.getFullYear() - currentDate.getFullYear()) === 21)  && (tempDate.getMonth() === currentDate.getMonth()) && (tempDate.getDay() > currentDate.getDay())) );

            if (cond1 && !cond2){
                Alert.alert('The age must be 21 or older');
            } else if (cond1 && cond2){
                setDate(currentDate);
            }
            setWritingDate(false);
            setShowDate(true);
        }}
        />;
    }

    if (showDate && !(tempDate.getFullYear() === date.getFullYear() && tempDate.getMonth() === date.getMonth() && tempDate.getDay() === date.getDay())){
        return (
            <>
                <Text>{date.toDateString()}</Text>
            </>
        );
    }

    return null;
  };


const PickerView = ({selectedCI, setSelectedCI}: {selectedCI: string; setSelectedCI: (value: string) => void}) => {

    return <Picker
        selectedValue={selectedCI}
        onValueChange={(itemValue) =>
        {
            console.log(selectedCI);
            setSelectedCI(itemValue);
    }
        } style={styles.pickerViewCI}>
        <Picker.Item label="V" value="venezolano" />
        <Picker.Item label="E" value="extranjero" />
        <Picker.Item label="J" value="juridico" />
        <Picker.Item label="P" value="pasaporte" />
        <Picker.Item label="G" value="gobernante" />
    </Picker>;

};

const DriverInputs = () => {
    const [writingDate, setWritingDate] = useState(false);
    const [showDate, setShowDate] = useState(false);
    const [date, setDate] = useState(new Date());
    // const [showModal, setShowModal] = useState(false); // Mostrar opciones para escoger cedula
    const [selectedCI, setSelectedCI] = useState('');

    const [image, setImage] = useState('https://via.placeholder.com/200');
    const selectImage = () => {
        const options = {
            title: 'Selecciona una imagen',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchImageLibrary(options, response => {
            console.log('Response = ', response);
        })
    };

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
                <TextInput style = {styles.littleInput} placeholder="min 6 carts." placeholderTextColor={'grey'} secureTextEntry/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>ConfirmPassword</Text>
                <TextInput style = {styles.littleInput} placeholder="confirm your password" placeholderTextColor={'grey'} secureTextEntry/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Born date</Text>
                {/* <TextInput style = {styles.littleInput} placeholder="Your born date" placeholderTextColor={'grey'}/> */}

                <DatePickerBox writingDate={writingDate} date={date} setDate={setDate} showDate={showDate} setShowDate={setShowDate} setWritingDate={setWritingDate} />

                <Button title="Add date" onPress={() => handleOnPressDate({ writingDate, setWritingDate })} />

            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>CI</Text>
                <View style = {styles.rowingInputs}>
                    {/* <Text onPress={() => setShowModal(true)}>Selection</Text> */}

                    <PickerView selectedCI={selectedCI} setSelectedCI = {setSelectedCI}/>

                    {selectedCI === 'extranjero' ?
                        <TextInput style = {styles.littleInputCI} placeholder="CI or passport" placeholderTextColor={'grey'}/>
                        :
                        <TextInput style = {styles.littleInputCI} placeholder="CI" placeholderTextColor={'grey'}/>
                    }

                </View>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>CI picture</Text>
                <TextInput style = {styles.littleInput} placeholder="Your CI picture" placeholderTextColor={'grey'}/>
                <Button 
                title = "Seleccionar Imagen"
                onPress = { selectImage }
                />
                <Image style={styles.CIPictureImage} source={{uri: image}}/>
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
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Driver license</Text>
                <TextInput style = {styles.littleInput} placeholder="Your driver license" placeholderTextColor={'grey'}/>
            </View>
            <View style = {styles.singleInputBox}>
                <Text style = {styles.littleTitle}>Certificado de saberes</Text>
                <TextInput style = {styles.littleInput} placeholder="Your knowledge certify" placeholderTextColor={'grey'}/>
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

        rowingInputs: {
            flexDirection: 'row',
        },

        littleInputCI: {
            width: '60%',
            backgroundColor: '#FFFBED',
            borderRadius: 5,
            color: 'black',
        },

        pickerViewCI: {
            width: '40%',
        },

        CIPictureImage: {
            alignSelf: 'center',
            height: 200,
            width: 200,
        },

    });
