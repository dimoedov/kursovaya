import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

class Signout extends Component {

    constructor(props) {
        super(props);
        this.state= {
            serverOtvet: ''
        }
    }
    eraseCookie(name) {
        document.cookie = name+'=; Max-Age=-99999999;';
    }
    handleSubmit = e => {
        e.preventDefault();

        fetch('/api/signout')
            .then(data => this.setState({serverOtvet: data}))
            .catch(err => console.log("err: =" + err));
    };

    render() {
            if (this.state.serverOtvet.success){
                this.eraseCookie('Authorized');
                return <Redirect to='/'/>;
            }else {
                return (
                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <h1 className='text-danger'>Вы уверены что хотете выйти?</h1>
                    <div className='row'>
                        <div className='col-lg-5'>
                           <button type="button " className="flex-column btn btn-primary btn-danger text-white btn-lg btn-block" onSubmit={this.handleSubmit}>Да</button>
                        </div>
                        <div className='col-lg-5'>
                            <Link  to='/'><button type="button " className="flex-column btn btn-primary btn-success text-white btn-lg btn-block">Нет</button></Link>
                        </div>
                    </div>
                    </form>
                )
            }
        }

}
export default Signout;