import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Logo from '../../elements/logo/logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import PageFooter from '../../elements/page-footer/page-footer';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {login} from '../../../store/api-actions';
import {connect, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import FormMessage from '../../elements/form-message/form-message';
import {getAuthStatus} from '../../../store/user/selectors';

const validationRules = {
  email: {
    validate: (value) => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
    message: 'Please enter a valid email address',
  },

  password: {
    validate: (value) => value.trim().length !== 0,
    message: 'Password field cannot be empty',
  },
};

function validateFields(formData) {
  const errors = [];

  Object.keys(formData).forEach((fieldName) => {
    const fieldValidation = validationRules[fieldName];
    const isValid = fieldValidation.validate(formData[fieldName]);

    if (!isValid) {
      errors.push({
        field: fieldName,
        message: fieldValidation.message,
      });
    }
  });
  return errors;
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export function SignIn({onSubmit}) {
  const authorizationStatus = useSelector(getAuthStatus);
  const [formErrors, setFormErrors] = useState([]);

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(evt) {
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    evt.preventDefault();
    const errors = validateFields(formData);

    (errors.length === 0) && onSubmit(formData);
    setFormErrors(errors);
  }

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.MAIN} />;
  }

  return (
    <>
      <HiddenSVG />

      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={handleSubmit}
          >

            {formErrors && <FormMessage formErrors={formErrors} />}

            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={emailRef}
                  className="sign-in__input"
                  type="text"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-email"
                >
                  Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  ref={passwordRef}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <PageFooter />
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(SignIn);
