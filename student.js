import {View,Text, Button} from 'react-native'
import React from 'react';
import axios from 'axios';

function student() {
  const[data,setData]=React.useState([])

const fetchdata=()=>{
  axios.get('http://127.0.0.1:8000/student/list').then((response)=>
   setData(response.data)
  )
 }
 React.useEffect(()=>{
 fetchdata()
 },[])

 const deletedata=(id)=>{

  axios.delete(`http://127.0.0.1:8000/student/delete/${id}`).then((response)=>{alert('deleted');fetchdata()}
  )
 }
    return (
      <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center' }}>
         {
   data.map((d)=>{
    return <View key={d.id}>
      <Text>
      {d.name}
      </Text>
     
      <Button onPress={()=>deletedata(d.id)} title='delete'></Button>
    </View>
   } )
 }
 
   </View>
    );
  }
  export default student