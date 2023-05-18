import React from "react";
const Navbar =(props)=> {
    return (
      <div style={styles.navBar}>
        <div style={styles.iconCont}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt=""
            style={styles.cartIcon}
          />
          <span style={styles.cartCount}>{props.count}</span>
        </div>
      </div>
    );
  
}

const styles ={
    cartIcon : {
        height : 42,
        marginRight : 70
    },
    navBar : {
        height:70,
        background : '#4267b2',
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    iconCont : {
        position : 'relative',
    },
    cartCount :{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position : 'absolute',
        right:50,
        top: -9
    }
}

export default Navbar;
