import React from 'react';
import './index.css';

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
                <input value={this.state.userInput} type="text" placeholder="add your item" onChange={e => this.handleChange(e.target.value)}/>
                <button onClick={() => this.addItem(this.state.userInput)}>add item</button>
                <ul>
                    {this.state.list.map(item => <li>{item}</li>)}
                </ul>
            </>
        )
    }
}

export default Root;
