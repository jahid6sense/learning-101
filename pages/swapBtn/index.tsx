import React from 'react';
import SwipeableButton from './SwipeableButton'

const index = () => {

    const swipeSuccess = () => {
        console.log('success')
    }

    const swipeFail = () => {
        console.log('fail')
    }

    return (
        <div>
            This is Swiping button

            <div>
                <SwipeableButton
                    onSuccess={swipeSuccess}
                    color='red'
                    // color='#6ab04c'
                    // color='url("/images/btn.png")'
                    text='SLIDE TO STOP'
                />
            </div>
        </div>
    );
};

export default index;
