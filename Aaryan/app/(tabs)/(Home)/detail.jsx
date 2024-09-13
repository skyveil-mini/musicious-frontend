import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function Tab() {
    const {colors} = useTheme()
    console.log(colors)
  return (
    <View style={styles.container}>
      <Text style={{color:colors.background}}>Tab [dsadhbaord|Settings]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
