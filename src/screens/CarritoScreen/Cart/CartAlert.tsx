import { Button, View, Alert } from 'react-native';

export const CartAlert = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Cuerpo de la alerta',
      [
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'destructive',
        },
        { text: 'Yes', onPress: () => console.log('Yes Pressed') },
      ],
      { cancelable: true },
      //clicking out side of alert will not cancel
    );
  };

  return (
    <View>
      <Button title='Mostrar Alerta' onPress={showAlert} />
    </View>
  );
};
