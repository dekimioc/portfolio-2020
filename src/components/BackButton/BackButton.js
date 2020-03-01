import React from 'react';
import { withRouter } from 'react-router-dom';
import './BackButton.scss';

const GoBack = ({ history }) => <div className="backButtonWrapper"><button className="blackButton" onClick={() => history.goBack()}>Go back</button></div>;

export default withRouter(GoBack);