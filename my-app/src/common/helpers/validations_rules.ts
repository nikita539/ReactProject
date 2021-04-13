export function validate(values: Validate) {
    let errors: Validate = {};
    if (!values.email) errors.email = 'Email address is required'
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email address is invalid'
    if (!values.password) errors.password = 'Password is required'
    else if (values.password.length < 6) errors.password = 'Password must be 6 or more characters'
    return errors;
}

export function emailValidate(values: Validate) {
    let errors: Validate = {};
    if (!values.email) errors.email = 'Email address is required'
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email address is invalid'
    return errors;
}

// types
export type Validate = {
    email?: string | undefined
    password?: string | undefined
}