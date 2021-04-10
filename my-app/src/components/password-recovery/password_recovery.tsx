import React, {useState} from "react";
import styles from "./password_recovery.module.css"
import {Api} from "../../API/API";
import {validate} from "../../common/helpers/validations_rules";
import {useForm} from "../../common/customHooks/useForm";
//11
export const PasswordRecovery = () => {
    let [responseMessage, setResponseMessage] = useState<string | undefined>('')
    let [isDisable, setIsDisable] = useState<boolean>(false)

    const submitCallback = async () => {
        setIsDisable(true)
        try {
            let response = await Api.recoveryPassword(values.email)
            setResponseMessage(response.data.info)
        } catch (error) {
            setResponseMessage(error.data.error)
        } finally {
            setIsDisable(false)
        }
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(submitCallback, validate);


    return <div className={styles.password_recovery}>
        <p>Enter your email address<br/>to recover your password</p>
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div className='mb-3'>
                    <input
                        type='email'
                        name='email'
                        value={values.email || ''}
                        className={`form-control ${errors.email && 'is-invalid'}`}
                        placeholder='Email'
                        aria-describedby='emailHelp'
                        onChange={handleChange}
                        disabled={isDisable}
                        autoComplete='off'
                    />
                    {errors.email && (
                        <div className='invalid-feedback'>{errors.email}</div>
                    )}
                </div>                <button
                    className='btn btn-primary'
                    type='submit'
                >Send
                </button>
            </form>
        </div>
        {responseMessage && <div>{responseMessage}</div>}
    </div>
}