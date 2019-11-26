import { observable, action, computed } from 'mobx';

class BirdStore {
    @observable birds = ["Canario", "Calopsita"];

    @action addBird = (bird) => {
        this.birds.push(bird);
    }

    @computed get birdCount() {
        return this.birds.length;
    }
}


const store = new BirdStore();
export default store;