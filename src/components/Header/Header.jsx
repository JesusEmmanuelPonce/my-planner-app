import React from 'react'
import { SafeAreaView, Text } from 'react-native';

import { styles } from './styles';

const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.text}>My planner</Text>
        </SafeAreaView>
    )
}

export default Header;