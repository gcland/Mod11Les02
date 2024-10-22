import { Component } from "react";

class UserProfile extends Component {
    
    // using props -- name should be initial variable
    // Corrected: 
    constructor(props) {
        super(props);
        this.state = { 
            name: this.props.initialName 
        } // Incorrect -> { name: 'Alex' };
    
        // bind 
        this.changeName = this.changeName.bind(this)
    }

    // Incorrect function
    // changeName() {
    //     this.state.name = 'Charlie';
    // }

    // Corrected function; use this.setState
    changeName() {
            this.setState({ name: 'Charlie'});
        }

    render() {

        // define name variable
        const name = this.state.name;

        return (
            <div>
                <h2>Mod11Les02 - 1.1</h2>
                <h3>User Profile</h3>
                <p>Name: {name}</p> 
                <button onClick={this.changeName}>Change Name</button>
            </div> 
            // Incorrect -> <p>Name: {this.state.name}</p> 
        );
    }
}

export default UserProfile