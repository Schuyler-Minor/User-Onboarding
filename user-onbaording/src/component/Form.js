import React from "react"

export default function Form (props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props


    const onSubmit = evt => {
         evt.preventDefault()
        submit()
    }   

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type ==='checkbox' ? checked : value;
        change( name, valueToUse)
    };

    return (
        <form className='form-container'>
            <div className='form-group submit'>
                <h2>Add a New User</h2>

                <button>submit</button>

                <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>

                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>

                <label>Name
                    <input 
                     value={values.name}
                     onChange={onChange}
                     name='name'
                     type='text'
                    />
                </label>

                <label>Email
                    <input 
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='email'
                    />
                </label>

                <label>Password
                    <input 
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    minLength='8' required
                    />
                </label>

                <div>
                    <label>Terms of Service
                        <input 
                        type='checkbox'
                        name='tos'
                        checked={values.tos}
                        onChange={onChange}
                        />
                    </label>
                </div>

            </div>

        </form>
    )

} 