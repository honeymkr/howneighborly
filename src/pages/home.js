import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';

import Layout from '../components/layout';

import {
  withAuthorization,
  withEmailVerification,
} from '../components/Session';
import { withFirebase } from '../components/Firebase';
    //import Messages from '../components/Messages';
import CreateListing from '../components/Listing/CreateListing';


class HomePageBase extends Component {
  _initFirebase = false;

  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.props.firebase.users().on('value', snapshot => {
        this.setState({
          users: snapshot.val(),
        });
      });
    }
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    return (
      <Fragment>
        <CreateListing  />


        

      </Fragment>
    );
  }
}

const condition = authUser => !!authUser;

const HomePage = compose(
  withFirebase,
  withEmailVerification,
  withAuthorization(condition),
)(HomePageBase);

export default () => (
  <Layout>

    <HomePage />

  </Layout>
);
