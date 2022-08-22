import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image } from 'react-native';




export default function Splash() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('loginapp/assets/logo3.png')}>
          </Image>
        <Text style={styles.footer}>welcome to my fitness application</Text>
      
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `#ffb6c1`,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    logo: {
      width:500,
      height:500,
      flexGrow:1,
      //backgroundColor:`#ffb6c1`,
    },
    footer: {
      color: "#FF3386",
      fontSize:20 ,
      fontWeight: "bold",
      fontFamily: 'Open Sans',
  
  
    }
  });
  