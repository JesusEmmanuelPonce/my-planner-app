import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header/Header';
import AddForm from './src/components/AddForm/AddForm';
import { styles } from './styles';

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <AddForm />
      </View>
    </View>
  );
}

export default App;
