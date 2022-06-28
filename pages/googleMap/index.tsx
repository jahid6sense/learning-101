import React from 'react';
import GoogleMap from '@Components/GoogleMap';
import { Button } from 'antd';

const index = () => {
    return (
        <div>
            <Button
                type="primary"
            >
                I am from Antd</Button>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default index;
