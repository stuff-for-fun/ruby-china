'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { initApplication } from '../actions/application';
import { initEnvironment } from '../actions/environment';
import NavigationBar from '../components/app/navigation-bar';
import '../assets/stylesheets/global.css';

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initEnvironment());
    dispatch(initApplication());
  }

  render() {
    return (
        <div>
          <NavigationBar {...this.props} />
          {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { environment, application } = state;
  return {
    width: environment.width,
    height: environment.height,
    selectedTab: application.selectedTab
  }
}

export default connect(mapStateToProps)(App);
