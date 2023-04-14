import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sign-in.css';


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: ''}
    }

    handleChange (event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }


    handleSubmit (event) {
        this.props.getToken(this.state.email, this.state.password)
        event.preventDefault()
    }

    render() {
        return (
            <main className="form-signin w-100 m-auto m-5 w-100 h-100 flex-column align-middle">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
                    <div className="form-floating">
                            <input type="email" className="form-control" name="email" placeholder="email" value={this.state.email}
                                    onChange={(event) => this.handleChange(event)} />
                        <label >Email address</label>
                    </div>
                    <div className="form-floating">
                            <input type="password" className="form-control"  name="password" placeholder="password" value={this.state.password}
                                    onChange={(event) => this.handleChange(event)} />
                        <label >Password</label>
                    </div>
                    <p>Have not an account yet? <a className="link-info" href="/register">Sign up →</a></p>
                        <input type="submit" className="w-100 btn btn-primary" value="Sign in" />
                </form>
            </main>
        )
    }
}


export default LoginForm;