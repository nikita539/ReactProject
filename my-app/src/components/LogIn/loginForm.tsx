import React from "react";
import {NavLink} from "react-router-dom";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {LogInThunk} from "../../store/log_in-reducer";

type FormikErrorType = {
    email?: string
    password?: string
}


const LogInFrom = () => {

    const dispatch  = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if(!values.password) {
                errors.password = 'Required'
            }
            else if (values.password.length < 5) {
                errors.password = "password is short"
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(LogInThunk(formik.values.email,formik.values.password))
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{width:"100%",height:'200px'}}>
                <div className="mb-3">
                    {formik.errors.email && <div style={{color:"red"}}>{formik.errors.email}</div>}
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder={"Email"}
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>
                {formik.errors.password && <div style={{color:"red"}}>{formik.errors.password}</div>}
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder={"Password"}
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <NavLink to={"/PasswordRecovery"} style={{textDecoration:'none'}}>forgot password</NavLink>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >Submit</button>
            </div>
        </form>
    )
}

export default LogInFrom;