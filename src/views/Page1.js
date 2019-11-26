import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";
import '../App.css'


@inject('BirdStore')
@observer
class Page1 extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const bird = this.bird.value;
        this.props.BirdStore.addBird(bird);
        this.bird.value = '';
    }
    render() {
        const { BirdStore } = this.props;

        return (
            <div className="App">
                <h2>Você tem {BirdStore.birdCount} passarinhos!</h2>

                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" placeholder="Digite um passarinho" ref={input => this.bird = input}></input>
                    <button>Adicionar</button>
                </form>

                <Link to="/pagina2">Mapa</Link>

            </div>
        )
    }


}

export default Page1;
