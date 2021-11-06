import React from 'react';
import {Appbar} from 'react-native-paper';



const Header:React.FC<HeaderProspos> = (props:HeaderProspos) => {
    return (
        <Appbar>
            <Appbar.BackAction />
            <Appbar.Content title={props.title} />
        </Appbar>
    )
}

interface HeaderProspos  {
    title: string;
  };

export default Header;