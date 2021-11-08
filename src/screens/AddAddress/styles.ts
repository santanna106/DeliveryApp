import { StyleSheet} from "react-native";
import { theme } from "../../App.style";

export const styles = StyleSheet.create({
    marginHorizontal:{
        marginHorizontal:10,
    },
    buttonIconAdd:{
        position:"absolute",
        right:-20,
        top:2
    },
    buttonAddLabel:{
        fontSize:30,
    },
    readyButton:{
        margin:10,
        marginTop:80,
        height:50,
        paddingVertical:3
    },
    readyButtonLabel:{
        fontSize:18
    },
    buttonIconRemove:{
        color:theme.colors.primary,
        opacity:0.7,
    }
});