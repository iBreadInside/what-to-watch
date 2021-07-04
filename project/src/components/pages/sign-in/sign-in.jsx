import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Logo from '../../elements/logo/logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import PageFooter from '../../elements/page-footer/page-footer';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {login} from '../../../store/api-actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export function SignIn({onSubmit, authorizationStatus}) {
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.MAIN} />;
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }

  function handlePasswordChange(evt) {
    evt.target.value ?
      setIsPasswordValid(evt.target.value.split('').some((character) => character !== ' ')) :
      setIsPasswordValid(true);
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
          <form action="#" className="sign-in__form" onSubmit={isPasswordValid && handleSubmit}>
            {!isPasswordValid
              ? (<div className='sign-in__message'><p>Please enter a valid password</p></div>)
              : ''}
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={emailRef}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  required
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
                  required
                  onChange={handlePasswordChange}
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
