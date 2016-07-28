import React, { Component } from 'react';
import Header from './template/Header.jsx';
import Context from '../context/Context';


class App extends Component {

    componentWillMount() {
        console.log(Context.cursor.toJS());

    }

    render() {
        return (
            <div>dfg
                <div className="container offset">
                    <Header/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
