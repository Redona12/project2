import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";

function WelcomeScreen({navigation}){
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.txt}>Welcome to home page</Text>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>
            
            <View style={styles.container}>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('QRCode')}>
                    <Text style={styles.buttonText}>Scan your QR Code</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('NFTDisplay')}>
                    <Text style={styles.buttonText}>NFT Display</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop:30,
        width: 300,  
        height: 150,
        marginLeft:100,
        marginRight:100,
    },
    txt:{
        marginTop:200,
        color:'#99882b',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20
    },
    button1: {
        backgroundColor: '#7dcffa',
        padding: 15,
        borderRadius: 10,
        marginBottom:20, 
    },
    button2:{
        backgroundColor: '#7dcffa',
        padding: 15,
        borderRadius: 10, 
    },  
    buttonText: {
        color: '#FFFFFF',       
        fontSize: 18,
        textAlign: 'center',
    },
})