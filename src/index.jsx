import * as React from 'react';
import  {Router, Route,hashHistory, IndexRoute} from 'react-router';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import ConcertsList from './components/concertslist/ConcertsList.jsx';
import './components/css/General.css';


const Routes = () => {

    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={App}/>
                <Route path="ConcertsList" component={ConcertsList}>
                    
                </Route>
            </Route>
        </Router>
    )

};


ReactDOM.render(<Routes/>, document.getElementById('root'));