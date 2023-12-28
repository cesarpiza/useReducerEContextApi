import React, { useReducer } from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { useUserContext } from '../../context/userContext';

export default function Home({ navigation }) {

    const { state, dispatch } = useUserContext();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.registerUserContainer}>
                <Text style={styles.title}>user data</Text>
                {Object.keys(state.inputs).map((key, index) => (
                    <View
                        style={styles.textInputContainer}
                        key={String(index)}
                    >
                        <Text style={styles.subTitle}>{key}:</Text>
                        <TextInput
                            autoCapitalize='none'
                            style={styles.textInput}
                            value={state.inputs[key]}
                            onChangeText={text => dispatch({ type: key, text: text })}
                        />
                    </View>
                ))}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            dispatch({ type: 'registerUser' });
                        }}
                    >
                        <Text style={styles.buttonText}>register user</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            dispatch({ type: 'clear' });
                        }}
                    >
                        <Text style={styles.buttonText}>clear</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={[styles.button, {
                    alignSelf: 'center',
                    backgroundColor: 'darkorange',
                }]}
                onPress={() => {
                    navigation.navigate('RegistedUsersList')
                }}
            >
                <Text style={[styles.buttonText, {
                    color: 'black',
                }]}>registed users list</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}