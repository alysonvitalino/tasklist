import { CircleCheck } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TaskCard = ({ title, description, status, onClick }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <CircleCheck color="green" size={32} />
            </View>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity style={styles.button} onPress={onClick}>
                <Text style={styles.buttontext}>{status === "Done" ? 'Deletar' : 'Check'} </Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
    },
    status: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#d33f49',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
    },
    buttontext: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default TaskCard;