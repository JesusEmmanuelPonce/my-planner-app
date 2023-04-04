import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header/Header';
import AddForm from './src/components/AddForm/AddForm';
import { styles } from './styles';

const App = () => {

  const handleNewBudget = (value) => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <AddForm
          handleNewBudget={handleNewBudget}
        />
      </View>
    </View>
  );
}

export default App;
