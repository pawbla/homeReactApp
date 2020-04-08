import React, {useState} from 'react';
import DescriptionPresentational from './DescriptionPresentational';

export default function Description(props) {

    const [values, setValues] = useState({firstName: "", lastName: "", email: "", isEnabled: false, role: "USER"});

    const onSubmit = () => {
        console.log("on submit");
    }

    const onChange = (event) => {
        console.log("On change");
        console.log(" Name: " + event.target.name);
        setValues({...values, [event.target.name]: event.target.value});
    }

    const toggleCheck = () => {
        setValues({...values, ["isEnabled"]: !values.isEnabled})
    }

    return (
        <div>
            <DescriptionPresentational onSubmit={onSubmit}
                                       onChange={onChange} 
                                       toggleCheck={toggleCheck}
                                       value={values}
                                       item={props.item}/>
        </div>
    )
}