import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/userAction';

const UserSelectOptions = ({ getUsers, user: { users, loading } }) => {
  useEffect(() => {
    getUsers();
    //eslint-disable-next-line
  }, []);

  return (
    !loading &&
    users !== null &&
    users.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {' '}
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

UserSelectOptions.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(UserSelectOptions);
