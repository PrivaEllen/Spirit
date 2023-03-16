import React from 'react';
import Buy_pictures from '../components/landing_components/Buy_pictures';
import Header from '../components/landing_components/header';
import Infotext_1 from '../components/landing_components/Infotext_1';
import Infotext_2 from '../components/landing_components/Infotext_2';

class Land extends React.Component
{
    render()
    {
        const divStyle = {
            margin: '0%',
            padding: '0%',
            background: '#F2E3D0',
            display: 'flex', 
            flexDirection: 'column',
          };
        return (
            <div style={ divStyle}>
                <Header />
                <Infotext_1 />
                <Buy_pictures />
                <Infotext_2 />
              
            </div>
      
        )
    }
}

export default Land