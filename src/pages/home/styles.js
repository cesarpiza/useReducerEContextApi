import { Dimensions, StyleSheet } from 'react-native';
import Styles from '../../styles/theme';
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: Styles.color.defaultColor,
        padding: 15,
        justifyContent: 'center',
    },
    registerUserContainer: {
        padding: 20,
        marginBottom: 20,
        borderWidth: 2,
    },
    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textInputContainer: {
        marginBottom: 10,
    },
    subTitle: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 18,
    },
    textInput: {
        padding: 6,
        fontSize: 16,
        borderWidth: 2,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 10,
        marginTop: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'darkblue',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 16,
    },
});