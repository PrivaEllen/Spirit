import React from "react";

export default function Header(){
    return(
        <header className='container_header'>
        <div className='container_header_general'>
          <img src={require('../../images/logo.png')} className='container_header_general_logo'></img>
          <span className='container_header_general_name'>spirit</span>
        </div>
      </header>
    )
}