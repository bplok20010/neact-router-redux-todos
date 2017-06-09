/** @jsx h */
import {
    Component,
    createElement as h
} from 'neact';
import {
    HashRouter as Router,
    NavLink,
    Link,
    Route,
    Redirect,
    Switch
} from 'neact-router';

import About from './About'
import Home from './Home'
import Content from './Content'

var i=1;

const Test = ()=> <div>{i++}</div>

class Layout extends Component {
    render() {
        return (
            <Router>
                <div class="main">
                    <div>
                        <NavLink to="/index">index</NavLink>
                        <NavLink to="/content">content</NavLink>
                        <NavLink to="/about">about</NavLink>
                    </div>
                    <Test/>

                    <Route path="/" exact={true} component={Home}></Route>
                    <Route path="/index" component={Home}></Route>
                    <Route path="/content" component={Content}></Route>
                    <Route path="/about" component={About}></Route>

                </div>
            </Router>
        );
    }
}

export default Layout;