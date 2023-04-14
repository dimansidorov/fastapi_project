import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sign-in.css';


class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',}
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
            <main className="m-auto w-75 m-5 flex-column align-middle container">
                <form className="" onSubmit={(event) => this.handleSubmit(event)}>
                    <h1 className="h3 my-3 fw-normal text-center">Please sign up</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                        <div className="my-2">
                            <label className="mx-2">Username</label>
                            <input type="login" className="form-control" name="username" placeholder="username" value={this.state.username}
                                onChange={(event) => this.handleChange(event)} />
                            <span class="form-text"></span>
                        </div>
                        <div className="my-2">
                            <label className="mx-2">Email address</label>
                            <input type="email" className="form-control" name="email" placeholder="email" value={this.state.email}
                                onChange={(event) => this.handleChange(event)} />
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                        <div className="my-2">
                            <label className="mx-2">First name</label>
                            <input type="login" className="form-control " name="login" placeholder="login" value={this.state.email}
                                onChange={(event) => this.handleChange(event)} />
                        </div>
                        <div className="my-2">
                            <label className="mx-2">Last name</label>
                            <input type="login" className="form-control " name="login" placeholder="login" value={this.state.email}
                                onChange={(event) => this.handleChange(event)} />
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                        <div className="my-2">
                            <label className="mx-2">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="password" value={this.state.password}
                                onChange={(event) => this.handleChange(event)} />
                        </div>
                        <div className="my-2">
                            <label className="mx-2">Confirm password</label>
                            <input type="password" className="form-control" name="Confirm password" placeholder="Confirm password" value={this.state.password}
                                onChange={(event) => this.handleChange(event)} />
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="submit" className="btn btn-outline-success mt-3" value="Sign up" />

                    </div>
                    <p className="text-center text-muted my-2">
                        Have an account? <a className="link-info" href="/login">Sign in →</a>
                    </p>
                </form>
            </main>
        )
    }
}


export default SignUpForm;