import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3e5f5',
        borderRadius: 10,
        elevation: 8,
        marginHorizontal: 30,
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        transform: [{ translateY: 50 }],
    },
    label: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },
    input: {
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        padding: 10,
    },
    button: {
        backgroundColor: "#4a148c",
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
    }
})