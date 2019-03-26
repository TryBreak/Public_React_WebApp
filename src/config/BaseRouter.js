import React, { Component } from 'react';

//路由切换

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//路由切换 -- end

import Inbox from '../config/Inbox'; //页面集合全路由展示
import routes from '../views/routes'; //页面配置文件
import RouteView from './RouteView'; //路由渲染文件
import { project_detail } from '../config/constants';
import { inspect404 } from '../utils/inspectRouter';

// Mobx
import { Provider } from 'mobx-react';
import * as store from '../store/index';

//加载请求的设置
import { $axios_set_default } from '../utils/http';
class App extends Component {
  constructor(props) {
    super(props);
    $axios_set_default();
  }
  componentDidMount() {
    this.watchRouter();
  }
  componentWillUpdate() {
    this.watchRouter();
  }
  //全局的路由变化监听
  watchRouter = () => {
    const { pathname } = this.props.history.location;
    const inspectRouter = inspect404({ pathname, routes });
    if (Boolean(inspectRouter)) {
    } else {
      this.props.history.replace('/404');
    }
    const title = inspectRouter && inspectRouter.title;
    window.document.title = title || project_detail.name;
  };
  render() {
    return (
      <Switch>
        <Route exact path="/inbox" component={Inbox} />
        <RouteView routes={routes} />
      </Switch>
    );
  }
}

class BaseRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact component={App} />
        </Router>
      </Provider>
    );
  }
}

export default BaseRouter;
