import{Ionicons}from"@expo/vector-icons";
import{Text, View, StyleSheet, Button,TouchableOpacity,ScrollView,Image} from 'react-native'
export default function spotfity() {
  return(
    <ScrollView style={estilo.contaier}>
      <Image
        style={estilo.album}
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VFk3FVuo2BzHGY42-7uTQfbbDxWL63xTXGkYW5W-ew&s"}}/>
        <Text style={estilo.musica}>PRESIDENTE</Text>
        <Text style={estilo.artista}>m4rkim</Text>
<View style={estilo.ontroles}>
    <TouchableOpacity>
    <Ionicons name="shuffle" size={24}color= "white"/>
    </TouchableOpacity>
<TouchableOpacity>
    <Ionicons name="play-skip-back" size={24}color= "white"/>
    </TouchableOpacity>
<TouchableOpacity>
    <Ionicons name="play" size={24}color= "white"/>
   </TouchableOpacity> 
<TouchableOpacity>    
    <Ionicons name="play-skip-forward" size={24}color= "white"/>
</TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="repeat" size={24}color= "white"/>
</TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const estilo = StyleSheet.create({
  contaier: {
      backgroundColor: '#25262A',
    flex: 1,
    alignItems: 'center'

  },
album:{
  width:200,
  margin:20,
  height:200
},
musica:{
  color:'white',
  fontSize:18
},
artista: {
  fontSize: 14,
  color:'#aaa'
},
ontroles:{
  flexDirection:"row"
}

});