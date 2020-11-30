import React, {useState}  from 'react';

import MyProfilePopupPresentational from './MyProfilePopupPresentational';
import { connect } from "react-redux";
import {callPUT} from '../../actions';

const changePassEndpoint = "changepass";
const errorMessage = "Nie można zmienić hasła.";

function MyProfilePopup(props) {

    const initState = {oldPass: "", newPass: "", newPassRepeate: ""};
    const errorInit = {oldPass: false, newPass: false, newPassRepeate: false};

    const [values, setText] = useState(initState);
    const [errors, setError] = useState(errorInit);

    const onChange = (event) => {
        event.preventDefault();
        setText({...values, [event.target.name]: event.target.value});
        setError({...errors, [event.target.name]: event.target.value ? false : true})
    }

    const changePassowrd = async (event) => {
        event.preventDefault();
        if(checkEmptyField()) {
            alert("Uzupełnij puste pola");
            setText(initState);
            return;
        }
        if (!compareNewPasswords(values.newPass, values.newPassRepeate)) {
            alert("Wprowadzone hasła są różne");
            setText(initState);
            return;
        }
        const objToSend = {
            oldPassword: values.oldPass,
            newPassword: values.newPass
        }
        const resp = await props.callPUT(changePassEndpoint, props.user_id, objToSend, errorMessage);
        if (resp.hasError) {
            setText(initState);
            return;
        }
        props.hidePopup();
    }

    const checkEmptyField = () => {
        let errorObj = {};
        let ret = false;
        Object.keys(values).forEach(key => {
            let cond = values[key] === "" ? true : false;
            errorObj[key] = cond;
            if (values[key] === "" && !ret) {
                ret = true;
            }
        });
        setError(errorObj);
        return ret;
    }

    const compareNewPasswords = (newPass, newPassRepeate) => {
        if (newPass === newPassRepeate) { 
            return true;
        } else {
            setError({...errors, newPass: true, newPassRepeate: true});            
            return false;
        }
    }

    return (
        <div>
            <MyProfilePopupPresentational changePassowrd={changePassowrd}
                             values={values}
                             errors={errors}
                             onChange={onChange} 
                             hidePopup={props.hidePopup}/>
                             
        </div>
    )
}

const mapDispatchToProps = {callPUT};

export default connect(null, mapDispatchToProps)(MyProfilePopup);