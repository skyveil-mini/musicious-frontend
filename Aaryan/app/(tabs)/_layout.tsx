import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Navigator, Tabs } from 'expo-router';
import { useEffect } from 'react';
import { useTheme } from 'react-native-paper';

export default function TabLayout({navigation }) {

  useEffect(() => {

    const n = navigation?.navigate('Details')
    console.log(navigation)
    
    return () => {
      
    }
  }, [])
  
  const theme = useTheme()
  return (
    <Tabs  screenOptions={{ tabBarActiveTintColor: 'blue',tabBarLabelStyle:{
      display:"none"
    }, headerShown:false, tabBarStyle:{
      backgroundColor:theme.colors.background,
      
    } }}>
      <Tabs.Screen
      
        name="index"
        options={{
          
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: 'Setddtings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
