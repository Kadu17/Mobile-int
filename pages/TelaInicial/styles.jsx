import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },

    bg:{
        width: '100%',
        height: '100%'
    },

    contBtn:{
        width:"100%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end"
    },

    btn:{
        width: "50%",
        height:"7%",
        marginBottom: 45,
        backgroundColor: "#F2BF27",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
    },
    texto:{
        fontWeight:'bold',
        color:"#FFFFFF",
        fontSize: 24
    }
})

export default styles