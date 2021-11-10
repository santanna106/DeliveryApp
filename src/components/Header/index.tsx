import React,{useState} from 'react';
import {Appbar,Menu} from 'react-native-paper';

import {styles} from './styles';


interface HeaderProspos  {
    hasBackButton?:boolean;
    navigation?:any;
    title: string;
  };

const Header:React.FC<HeaderProspos> = (props:HeaderProspos) => {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const goBack = () => props.navigation?.goBack();

    const goToMyDeliveries = () =>{
        props.navigation?.navigate("Deliveries");
        closeMenu();
    }
    const logout = () => {
        props.navigation?.navigate("Login")
        closeMenu();
    }

    return (
        <Appbar>
            {
                props.hasBackButton ?
                    <Appbar.BackAction onPress={goBack}/>
                :
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action
                            icon="menu"
                            color={styles.menu.color}
                            onPress={openMenu}
                           />
                    
                    }>
                    
                    <Menu.Item onPress={goToMyDeliveries} title="My deliveries" onPress={goToMyDeliveries}/>
                    <Menu.Item onPress={logout} title="Logout" />
                </Menu>
                
            }
           
            <Appbar.Content title={props.title} />
        </Appbar>
    )
}


export default Header;