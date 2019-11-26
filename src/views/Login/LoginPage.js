import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";
import '../../App.css'


@inject('LoginStore')
@observer
class LoginPage extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    render() {
        const { LoginStore } = this.props;
        return (
            <div className="App">

                <form onSubmit={e => this.handleSubmit(e)}>
                    <h2>Login</h2>
                    <input type="text" placeholder="admin" onChange={(event) => LoginStore.onChangeEmail(event.target.value)}></input>
                    <br />
                    <h2>Senha</h2>
                    <input type="text" placeholder="password" ref={input => this.senha = input}></input>
                    <h1>{LoginStore.email}</h1>

                    <button>Entrar</button>
                </form>

                <Link to="/pagina2">Mapa</Link>

            </div>



        )
    }


}

export default LoginPage;
