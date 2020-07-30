import React from 'react';
import './styles.css'

import HS_Input from '../../libs/hsInput'
import {hsSubmit as HS_Submit, hsButton as HS_Button} from '../../libs/hsButton'

function MyProfilePresentational(props) {

    return(
        <div className = "incontext myprofile">
            <form>
                <div>
                    <HS_Input placeholder="Imię"></HS_Input>
                </div>
                <div>
                    <HS_Input placeholder="Nazwisko"></HS_Input>
                </div>
                <div>
                    <HS_Input placeholder="e-mail"></HS_Input>
                </div>
                <div className="submit">
                    <HS_Submit width="30%"></HS_Submit>
                </div>
            </form>
            <div>
                <HS_Button text="Zmień hasło"
                            width="30%"></HS_Button>
            </div>
        </div>
    )
}

export default MyProfilePresentational;