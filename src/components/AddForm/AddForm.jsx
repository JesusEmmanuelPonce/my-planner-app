import { Pressable, Text, TextInput, View } from "react-native"
import { styles } from "./styles"

const AddForm = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Add Budget</Text>
            <TextInput
                keyboardType="numeric"
                placeholder="00"
                style={styles.input}
            />

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Accept</Text>
            </Pressable>
        </View>
    )
}

export default AddForm