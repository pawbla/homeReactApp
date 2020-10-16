import React, {useState, forwardRef, useImperativeHandle} from 'react';
import './modal.css'

/**
 * Modal library component to use withing Presentational Component.
 * To use Modal:
 * - Create component which will be set as Component parameter and rendered
 *  as Modal popup, should implement css with position as absoulte
 * - Above component should implement closing function referenced by props.hidePopup
 * - Presentational Component should implement mechanism which allows to open modal:
 * 
 * @param {*} param0 - contains two elements, firstone is Component which will be rendered,
 * the second elements are props
 */
const Modal = forwardRef(({ component: Component, ...props}, ref) => {
// const Modal = forwardRef(({component: Component, ref, ...props}) => {
    const [isPopup, showPopup] = useState(false);


    useImperativeHandle(ref, () => ({
        openPopup() {
            openHidePopup()
        }
    }));

    const openHidePopup = () => {
        showPopup(!isPopup)
    }

    return(
        <div className={isPopup ? "popup" : "no_popup"}>
            <Component hidePopup={openHidePopup} {...props}/>
        </div>   
    )
})

export default Modal;