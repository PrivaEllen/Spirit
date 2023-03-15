import React from 'react';
import Buy_pictures from '../components/landing_components/Buy_pictures';
import Header from '../components/landing_components/header';
import Infotext_1 from '../components/landing_components/Infotext_1';
import Infotext_2 from '../components/landing_components/Infotext_2';
import Carousel from '../components/landing_components/Carousel';

class Land extends React.Component
{
    render()
    {
        return (
            <div>
                <Header />
                <Infotext_1 />
                <Buy_pictures />
                <Infotext_2 />
              
            </div>
      
        )
    }
}

export default Land