import React from 'react'

class Person extends React.Component {
    state ={
        firstName : "Maurice"
    }

    onChange = (e) => {
        // console.log(e.target.value)
        this.setState({firstName: e.target.value})
    }

    onClick = () => {
        this.label.textContent = "Updated"
    }

    render() {
        const {firstName} = this.state;

        return <div>
                <button onClick={this.onClick}>CLick me</button>
                <label ref={node => this.label = node}>FirstName </label>
                <input type="text" value={firstName} onChange={this.onChange} />
            </div>
    }
}

export default Person;


