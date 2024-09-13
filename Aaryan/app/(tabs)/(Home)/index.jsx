import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

function Music(){
  return(
    <View>

    </View>
  )
}



export default function Tab() {
    const theme = useTheme()
    console.log(theme)


    const styles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor:theme.colors.background
       
      },
    });
  return (
    <SafeAreaView style={{
      backgroundColor:theme.colors.background,
      height:"100%",
      padding:5
      
    }}>

      <View style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
      }}>
        <Text style={{color:theme.colors.primary,fontSize:"40dp",marginLeft:20}}>Featured</Text>
        <FontAwesome size={28} name="search" color="white" style={{marginLeft:"auto",marginRight:"4%"}} />      
        </View>
        <View style={{
          width:"100%",
          height:"40%",
          padding:20
        }} >
          <Image style={{width:"100%" ,height:"100%"}} src='https://blog.pearlacademy.com/wp-content/uploads/2022/06/erik-mclean-9y1cTVKe1IY-unsplash-1080x675.jpg'></Image>
        </View>
      
    </SafeAreaView>
  );
}

