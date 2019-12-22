import React from 'react';
import './index.css';
import Upper from './components/Upper/Upper';
import Lower from "./components/Lower/Lower";

class Root extends React.Component {
    state = {
        userInput: "",
        list: []
    };

    handleChange = e => {
        this.setState({userInput: e});
    };

    addItem = e => {
        const listArr = this.state.list;

        listArr.push(e);

        this.setState({list: listArr, userInput: ""});
    };

    render() {
        return (
            <>
                <Upper value={this.state.userInput} onChange={e => this.handleChange(e.target.value)} onClick={() => this.addItem(this.state.userInput)}/>
                {/*<Lower />*/}
                <ul>
                    {this.state.list.map(item => <li>{item}</li>)}
                </ul>
            </>
        )
    }
}

export default Root;
