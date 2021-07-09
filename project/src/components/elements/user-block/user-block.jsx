import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {logout} from '../../../store/api-actions';

function renderUserBlockAuthorized (history, onLogout) {
  const userAvatar = localStorage.getItem('avatar');

  return (
    <>
      <li className="user-block__item">
        <div
          className="user-block__avatar"
          onClick={() => history.push(`${AppRoute.MY_LIST}`)}
        >
          <img src={userAvatar} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">

        <Link
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            onLogout();
          }}
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

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export function UserBlock({authorizationStatus, onLogout}) {
  const history = useHistory();

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

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
