import React, {useState, forwardRef, useImperativeHandle} from 'react';

const Overlay = forwardRef(({ component: Component, ...props}, ref) => {
    const [isPopup, showPopup] = useState(false);

    useImperativeHandle(ref, () => ({
        openPopup() {
            openHidePopup()
        }
    }));

    const openHidePopup = () => {
        showPopup(!isPopup)
    }

    return isPopup ? (
        <div>
            <Component {...props}/>
        </div>   
    ) : null;
})

export default Overlay;