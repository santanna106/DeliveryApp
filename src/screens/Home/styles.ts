import {StyleSheet} from 'react-native';
import { theme } from '../../App.style';

export const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    fab:{
       position:'absolute' ,
       right:0,
       bottom:0,
       margin:16,
    },
    markerImage:{
        width:35,
        height:35,
    },
    icon:{
        color:theme.colors.primary,
        marginTop:20,
    },
    cancelButton:{
        marginBottom:10,
    },
    flexcentercolumn:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        flexDirection:'column'
    },
    title:{
        margin:20,
        marginTop:40,
        textAlign:'center',
        color:theme.colors.primary
    },
    cancelDelivertButton:{
        position:'absolute',
        margin:"2%",
        bottom:0,
        width:"96%"
    }
});