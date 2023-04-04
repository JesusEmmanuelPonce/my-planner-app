import { useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"

import { styles } from "./styles"

const AddForm = ({ handleNewBudget }) => {

    const [budget, setBudget] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Add Budget</Text>
            <TextInput
                keyboardType="numeric"
                placeholder="00"
                style={styles.input}
                value={budget.toString()}
                onChangeText={setBudget}
            />

            <Pressable
                style={styles.button}
                onPress={() => handleNewBudget(budget)}
            >
                <Text style={styles.buttonText}>Accept</Text>
            </Pressable>
        </View>
    )
}

export default AddForm