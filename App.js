import { useState } from 'react';
import { StyleSheet, View, Text, TextInput,Button } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const App = () => {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[display,setDisplay] = useState(false)

  const resetFormData=() =>{
    setDisplay(false)
  }
  return (
    // <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']}>

    <View style={styles.container}>
      <Text style={stylesA.container} >React-Native Fill & Clear</Text>
      <TextInput style={stylesB.container} placeholder="Enter user Name" onChangeText={(text)=>setName(text)} value={name}/>
      <TextInput style={stylesB.container} placeholder="Enter user Password" onChangeText={(text)=>setPassword(text)} secureTextEntry={true} value={password}/>
      <TextInput style={stylesB.container} placeholder="Enter user Email" onChangeText={(text)=>setEmail(text)} value={email}/>
      <View style={{ padding:10, width:320  }}>

      <Button title='Print' onPress={()=>setDisplay(true)} color={'green'} />
      </View>
      <View  style={{width:300}}>

      <Button  title='Clear text' onPress={resetFormData}   />
      </View>
      <View>
        {
          display?
          <View>
            <Text style={{fontSize:20}}>User Name is :{name}</Text>
            <Text style={{fontSize:20}}>User Name is :{password}</Text>
            <Text style={{fontSize:20}}>User Name is :{email}</Text>
          </View>
          :null
        }
      </View>
    </View>
  // </LinearGradient>
    )
  }
  
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop:80,
  },
});
const stylesA = StyleSheet.create({
  container: {
  fontSize:30,
  color:'black',
  marginBottom:20,
  padding:10,
  borderRadius:10,
  },
});
const stylesB = StyleSheet.create({
  container: {
  backgroundColor:'#D7DEE7',
  fontSize:20,
  color:'black',
  marginBottom:10,
  padding:10,
  borderRadius:5,
  width:300,
  },
});

    
export default App