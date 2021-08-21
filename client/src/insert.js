import React from "react";
import axios from "axios";

class Insert extends React.Component {
    constructor() {
        super()

        this.state = {
            name : "",
            lastname : "",
            email : "",
            password : ""
        };
    }

    setName = (event) => { this.setState({ name : event.target.value }); }
    setLastname= (event) => { this.setState({ lastname : event.target.value }); }
    setEmail = (event) => { this.setState({ email : event.target.value }); }
    setPassword = (event) => { this.setState({ password : event.target.value }); }

    insert = (event) => {
        if(this.state.name == " " || this.state.name == "") {
            window.alert("Enter first name");
            return false;
        }else if(this.state.lastname == " " || this.state.lastname == "") {
            window.alert("Enter lastname");
            return false;
        }else if(this.state.email == " " || this.state.email == "") {
            window.alert("Enter email");
            return false;
        }else if(this.state.password == " " || this.state.password == "") {
            window.alert("Enter password");
            return false;
        }else {
            axios.post("http://localhost:4000/create", {
                name : this.state.name,
                lastname : this.state.lastname,
                email : this.state.email,
                password : this.state.password
            });

            return false;
        }

        this.state.name = "";
        this.state.lastname = "";
        this.state.email = "";
        this.state.password = "";
    }

    render() {
        return (
            <React.Fragment>
                <form method="POST">
                    <div className="form-group">
                        <label for="Firstname">Firstname:&nbsp;<input type="text" name="name" placeholder="First name" className="form-control" required onChange={this.setName} value={this.state.name} /></label>
                    </div>
                    <div className="form-group">
                        <label for="Lastname">Lastname:&nbsp;<input type="text" name="name" placeholder="Last name" className="form-control" required onChange={this.setLastname} value={this.state.lastname} /></label>
                    </div>
                    <div className="form-group">
                        <label for="Email">Email:&nbsp;<input type="email" name="name" placeholder="Email" className="form-control" required onChange={this.setEmail} value={this.state.email} /></label>
                    </div>
                    <div className="form-group">
                        <label for="Password">Password:&nbsp;<input type="password" name="name" placeholder="Password" className="form-control" required onChange={this.setPassword} value={this.state.password} /></label>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-success" onClick={this.insert} />
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Insert;