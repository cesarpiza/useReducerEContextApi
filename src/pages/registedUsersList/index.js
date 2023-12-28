import React from 'react';
import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { useUserContext } from '../../context/userContext';

export default function RegistedUsersList() {

    const { state, dispatch } = useUserContext();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                contentContainerStyle={{
                    padding: 10,
                    rowGap: 10,
                }}
                data={state.registedUsers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {

                    return (
                        <View style={styles.itemContainer}>
                            {Object.keys(state.inputs).map((key, index) => (
                                <Text
                                    style={styles.itemText}
                                    key={String(index)}
                                >
                                    {key}: {item[key]}
                                </Text>
                            ))}
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    dispatch({ type: 'deleteUser', id: item.id });
                                }}
                            >
                                <Text style={styles.buttonText}>delete</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    );
}