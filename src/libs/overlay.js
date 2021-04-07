import React, {useState, forwardRef, useImperativeHandle, useRef, useEffect} from 'react';

/**
 * 
 * Overlay library component to use withing Presentational Component.
 * To use Overlay:
 * - Create component which will be set as Component parameter and rendered
 *  as Overlay popup,
 * - Presentational Component which contains Overlay component should contains
 * popupClass equals css selector to main element in popup component
 * - Popup implementation should implement css with position as absoulte
 * - Presentational Component should implement mechanism which allows to open overlay
 * 
 * @param {*} param0 - contains two elements, first one is Component which will be rendered,
 * the second elements are props
 */
const Overlay = forwardRef(({ component: Component, ...props}, ref) => {
    const [isPopup, showPopup] = useState(false);

    const onOutsideClickRef =  useRef();

    useImperativeHandle(ref, () => ({
        openPopup() {
            openHidePopup()
        }
    }));

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);

    const handleClick = e => {
        if (!e.target.closest(props.popupClass)) {
            showPopup(false)
         }
    }

    const openHidePopup = () => {
        showPopup(true)
    }
  
    return isPopup ? (
        <div>
            <Component isPopup={isPopup} {...props}/>
        </div>   
    ) : null;
})

export default Overlay;