///validations ///

import { useState } from 'react'
export const useValidations = () => {
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        username: '',
        age: '',
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
                setErrors({ ...errors, email: 'Email es requerido' })
            }
        }
        ///email validations///

        // if (name === 'password') {
        //     //password length//
        //     if (input.password.includes(' ')) {
        //         setErrors({
        //             ...errors,
        //             password: 'password cannot have blank spaces',
        //         })
        //     } 
        //     else if (
        //         input.password.length < 8 ||
        //         input.password.length > 12
        //     ) {
        //         setErrors({
        //             ...errors,
        //             password:
        //                 'password must be between 8 and 12 characters long',
        //         })
        //     } 
        //     else if (
        //         input.password.length >= 8 &&
        //         input.password.length <= 12
        //     ) {
        //         setErrors({ ...errors, password: '' })
        //     } else {
        //         setErrors({ ...errors, password: 'password es requerido' })
        //     }
        //     //validation de una mayuscula y un numero//
        //     //password length//
        // }
        if (name === 'age') {
            if (input.age !== '') {
                if (input.age < 18) {
                    setErrors({
                        ...errors,
                        age: 'Debes ser mayor de edad para registrarte',
                    })
                } else if (!isNaN(input.age)) {
                    setErrors({ ...errors, age: '' })
                } else {
                    setErrors({ ...errors, age: 'age must be a number' }) //error not showing
                }
            } else {
                setErrors({ ...errors, age: 'age es requerido' })
            }
        }
        if (name === 'firstName') {
            if (input.firstName !== '') {
                setErrors({ ...errors, firstName: '' })
            } else setErrors({ ...errors, firstName: 'Nombre es requerido' })
        }
        if (name === 'lastName') {
            if (input.lastName !== '') {
                setErrors({ ...errors, lastName: '' })
            } else setErrors({ ...errors, lastName: 'Apellido es requerido' })
        }
        if (name === 'username') {
            if (input.username !== '') {
                setErrors({ ...errors, username: '' })
            } else{
                setErrors({
                    ...errors,
                    username: 'Nombre de usuario es requerido',
                })}
        }
    }
    return { errors, validate }
};
///validations ///
