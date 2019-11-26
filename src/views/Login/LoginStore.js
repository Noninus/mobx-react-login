import { observable, action } from 'mobx';

class LoginStore {
    @observable email = "raf";
    @observable senha = "";

    @action onChangeEmail = (email) => {
        this.email = email;
    }

    @action onChangeSenha = (senha) => {
        this.senha = senha;
    }

}


const store = new LoginStore();
export default store;