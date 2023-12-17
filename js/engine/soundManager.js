import Component from "./component.js";
import Renderer from "./renderer.js";
import { AudioFiles } from './resources.js';

class SoundManager extends Component {
    constructor() {
        super();
        this.sound = {};
    }

    addSound(name, path) {
        this.sound[name] = new Audio(path);
    }

    playSound(name) {
        this.sound[name].play();
    }

    update(deltaTime) {
        // Empty update method
    }
}


export default SoundManager;
