import {StyleSheet} from 'react-native';
import { theme } from '../../App.style';

export const styles = StyleSheet.create({
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
    },
    flexcentercolumn:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        flexDirection:'column'
    },
    icon:{
        color:theme.colors.primary,
        marginTop:20,
    },
})