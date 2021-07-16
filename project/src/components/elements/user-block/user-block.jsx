import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {logout} from '../../../store/api-actions';
import {getAuthStatus} from '../../../store/user/selectors';

function renderUserBlockAuthorized (history, onLogout) {
  const userAvatar = localStorage.getItem('avatar');

  function handleAvatarClick() {
    history.push(`${AppRoute.MY_LIST}`);
  }

  function handleLogoutClick(evt) {
    evt.preventDefault();
    onLogout();
  }

  return (
    <>
      <li className="user-block__item">
        <div
          className="user-block__avatar"
          onClick={handleAvatarClick}
        >
          <img src={userAvatar} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">

        <Link
          className="user-block__link"
          onClick={handleLogoutClick}
          to={AppRoute.MAIN}
        >
          Sign out
        </Link>
      </li>
    </>
  );
}

function renderUserBlockUnauthorized() {
  return (
    <Link
      className="user-block__link"
      to={AppRoute.SIGN_IN}
    >
      Sign in
    </Link>
  );
}

export default function UserBlock() {
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  function onLogout() {
    dispatch(logout());
  }

  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH
          ? renderUserBlockAuthorized(history, onLogout)
          : renderUserBlockUnauthorized()
      }
    </ul>
  );
}

