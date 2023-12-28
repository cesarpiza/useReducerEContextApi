import { StyleSheet } from 'react-native';
import Styles from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Styles.color.defaultColor,
    },
    itemContainer: {
        backgroundColor: 'lightblue',
        padding: 20,
    },
    button: {
        backgroundColor: 'darkred',
        position: 'absolute',
        right: 20,
        top: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonText: {
        color: '#ffffff',
        textTransform: 'capitalize',
    },
    itemText: {
        textTransform: 'capitalize',
        fontSize: 16,
    },
});