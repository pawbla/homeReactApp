import React from 'react';
import DeletePopupPresentational from './DeletePopupPresentational';
import { connect } from "react-redux";
import {callDELETE} from '../../actions/';

function DeletePopup(props) {

    const deleteEndpoint = 'deleteUser';
    const deleteErrMsg = "Wystąpił problem podczas usuwania użytkownika";

    const deleteUser = async () => {
        await props.callDELETE(deleteEndpoint, props.user_id, deleteErrMsg);
        props.hidePopup();
        props.reload();
    }

    return (
        <DeletePopupPresentational 
            deleteUser = {deleteUser}
            hidePopup={props.hidePopup}/>
    )
}

const mapDispatchToProps = {callDELETE};

export default connect(null, mapDispatchToProps)(DeletePopup)