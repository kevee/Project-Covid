import { StyleSheet } from 'react-native';

export const defaults = {
    primarycolor: '#3d9141',
    backgroundcolor: '#c2c2c2'
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: defaults.backgroundcolor
    },
    containerRowCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    containerFull: {
        width: '100%', 
        height: '100%'
    },
    title: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    navButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      padding: 15,
      borderBottomColor: "#c8c7cc",
      borderBottomWidth: 0.5,
      height: 78
    },
    navButtonTitle: {
      fontSize: 18,
      fontWeight: "400"
    },
    navButtonDescription: {
      color: "grey",
      marginTop: 4
    },
    actionButton: {
        backgroundColor: defaults.primarycolor,
        borderRadius: 25,
        padding: 15,
        paddingBottom: 0,
        width: '45%',
        height: 50,
        margin: '1.75%',
        
    },
    actionButtonTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
  });