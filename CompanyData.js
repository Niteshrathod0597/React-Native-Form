import { useState } from 'react';
import { Text, View } from 'react-native';

export const CompanyData = () => {
  const [name,setName] = useState()
  const testName =() =>{
    setName('Nitesh')
  }

  return (
    <View>
     
      <Text style={{fontSize:30, color:'red'}} >{name}</Text>
      <Button title='Update Name' onPress={testName} />

    </View>
  )

}