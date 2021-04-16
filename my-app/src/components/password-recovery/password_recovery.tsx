import React, {useState} from "react";
import styles from "./password_recovery.module.css"
import {Api} from "../../API/API";
import {emailValidate} from "../../common/helpers/validations_rules";
import {useForm} from "../../common/customHooks/useForm";
import {Search} from "../search/Search";

export const PasswordRecovery = () => {
    let [responseMessage, setResponseMessage] = useState<string | undefined>('')
    let [isDisable, setIsDisable] = useState<boolean>(false)

    const submitCallback = async () => {
        setIsDisable(true)
        try {
            let response = await Api.recoveryPassword(values.email)
            setResponseMessage(response.data.info)
            values.email = ''
        } catch (error) {
            errors.email = error.response.data.error
        } finally {
            setIsDisable(false)
        }
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(submitCallback, emailValidate)


    return <>
        <div className={styles.password_recovery}>
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
                        {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        {responseMessage && <div className={styles.responseMessage}>{responseMessage}</div>}
                        {isDisable && <div className={`spinner-border ${styles.spinner}`} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>}
                    </div>
                    <button
                        className='btn btn-primary'
                        type='submit'
                    >Send
                    </button>
                </form>
            </div>
        </div>
        <Search minCardsCount={1} maxCardsCount={25}/>
    </>
}