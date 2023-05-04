import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, age } from 'react-native';
import { CompanyData } from './CompanyData';

export default function App() {
  return (
    <View style={styles.container}>
      <CompanyData/>
      <UserData/>
      <Text style={{fontSize:30, color:'red'}} >Name : Nitesh</Text>
    </View>
  );
}
const UserData =()=>{
  return(
    <View>
      <Text style={{fontSize:30, color:'red'}} >Name : Nitesh</Text>
      <Text style={{fontSize:30, color:'red'}} >Age : 23</Text>
      <Text style={{fontSize:30, color:'red'}} >Email : nier@gmail</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//  Component calling

import { Text, View } from 'react-native';

export const CompanyData = () => {
  return (
    <View>
      <Text style={{fontSize:30, color:'red'}} >Name : rathod</Text>
      <Text style={{fontSize:30, color:'red'}} >Age : 23</Text>
      <Text style={{fontSize:30, color:'red'}} >Email : nier@gmail</Text>

    </View>
  )

}
// button onPress

export default function App() {
    const fruit =()=>{
      console.warn('kam kar');
    }
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30, color:'black'}} >Click kar</Text>
        <Button title='On Press' onPress={()=>fruit()} color={'green'}></Button>
      </View>
    );
  }

  import { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


const App = () => {
  const[name,setName] = useState('Nitu')

  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, color:'red'}} >Props in react</Text>
      <Button title='Update Props' onPress={()=>setName('Rathod')}></Button>
      <User name={name} age={30}/>
    </View>
    )
  }
  
  const User =(props)=>{
  return(
    <View>
      <Text style={{fontSize:30, color:'black', backgroundColor:'pink'}} >{props.name}{props.age}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
    
export default App

import { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


const App = () => {
  const[name,setName] = useState('Nit')

  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, color:'red'}} >Props in react</Text>
      <Button title='Update Props' onPress={()=>setName('Rathod')}></Button>
      <User name={name} age={30}/>
    </View>
    )
  }
  
  const User =(props)=>{
  return(
    <View>
      <Text style={{fontSize:30, color:'black', backgroundColor:'pink'}} >{props.name}{props.age}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
    
export default App

// Form data fill & reset--

import { useState } from 'react';
import { StyleSheet, View, Text, TextInput,Button } from 'react-native'


const App = () => {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[display,setDisplay] = useState(false)

  const resetFormData=() =>{
    setDisplay(false)
  }
  return (
    <View style={styles.container}>
      <Text style={stylesA.container} >Foams In React</Text>
      <TextInput style={stylesB.container} placeholder="Enter user Name" onChangeText={(text)=>setName(text)} value={name}/>
      <TextInput style={stylesB.container} placeholder="Enter user Password" onChangeText={(text)=>setPassword(text)} secureTextEntry={true} value={password}/>
      <TextInput style={stylesB.container} placeholder="Enter user Email" onChangeText={(text)=>setEmail(text)} value={email}/>
      <View style={{ padding:10 }}>

      <Button title='Print' onPress={()=>setDisplay(true)} color={'green'} />
      </View>
      <Button  title='Clear text'  onPress={resetFormData}  />
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
    )
  }
  
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:40,
  },
});
const stylesA = StyleSheet.create({
  container: {
  backgroundColor:'pink',
  fontSize:30,
  color:'red',
  marginBottom:10,
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