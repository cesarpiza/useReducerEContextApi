import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
    StatusBar,
    StyleSheet,
} from 'react-native';
import Home from './pages/home';
import RegistedUsersList from './pages/registedUsersList';
import { UserProvider } from './context/userContext';

export default function App() {

    const { Navigator, Screen } = createNativeStackNavigator();

    useEffect(() => {
        StatusBar.setHidden(true);
    }, []);

    return (
        <UserProvider>
            <NavigationContainer>
                <Navigator screenOptions={{
                    headerShown: false,
                }}>
                    <Screen
                        name='Home'
                        component={Home}
                    />
                    <Screen
                        name='RegistedUsersList'
                        component={RegistedUsersList}
                    />
                </Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});