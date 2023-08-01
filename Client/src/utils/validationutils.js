 ///validations ///

import { useState } from "react"
export const useValidations = () => {

 const [errors, setErrors] = useState({
    email: '',
    password: '',
})

 const validate = (input, name) => {
    ///email validations///
    if (name === 'email') {
        if (input.email !== '') {
            // Use a regular expression to check if the input value is a valid email
            const emailPattern = new RegExp(
                /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ //eslint-disable-line
            )
            if (emailPattern.test(input.email)) {
                setErrors({ ...errors, email: '' })
            } else {
                setErrors({ ...errors, email: 'Invalid email format' })
            }
        } else {
            setErrors({ ...errors, email: 'Email is required' })
        }
    }
    ///email validations///

    if (name === 'password') {
        //password length//
        if (input.password.includes(' ')) {
            setErrors({
                ...errors,
                password: 'password cannot have blank spaces',
            })
        } else if (
            input.password.length < 8 ||
            input.password.length > 12
        ) {
            setErrors({
                ...errors,
                password:
                    'password must be between 8 and 12 characters long',
            })
        } else if (
            input.password.length >= 8 &&
            input.password.length <= 12
        ) {
            setErrors({ ...errors, password: '' })
        } else {
            setErrors({ ...errors, password: 'password is required' })
        }
        //password length//
    }
}
return { errors, validate };
}
///validations ///