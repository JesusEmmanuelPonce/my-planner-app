import { Pressable, Text, TextInput, View } from "react-native"
import { styles } from "./styles"

const AddForm = () => {
    return (
        <View style={styles.container}>
            <Text>Add Budget</Text>
            <TextInput />

            <Pressable>
                <Text>Accept</Text>
            </Pressable>
        </View>
    )
}

export default AddForm