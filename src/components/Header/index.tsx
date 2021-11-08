import React from 'react';
import {Appbar,Menu} from 'react-native-paper';

import {styles} from './styles';

const Header:React.FC<HeaderProspos> = (props:HeaderProspos) => {
    return (
        <Appbar>
            {
                props.hasBackButton ?
                    <Appbar.BackAction />
                :
                    <Menu
                        visible={true}
                        onDismiss={() => {}} 
                        anchor={
                            <Appbar.Action
                                icon="menu"
                                color={styles.menu.color}
                            />
                        }>
                    </Menu>
            }
           
            <Appbar.Content title={props.title} />
        </Appbar>
    )
}

interface HeaderProspos  {
    hasBackButton?:boolean;
    title: string;
  };

export default Header;