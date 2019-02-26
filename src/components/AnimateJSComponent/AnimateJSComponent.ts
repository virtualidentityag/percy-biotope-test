import Component from '@biotope/element';
import template from './template';

interface AnimateJSComponentProps {

}

interface AnimateJSComponentState {

}

class AnimateJSComponent extends Component<AnimateJSComponentProps, AnimateJSComponentState> {
    static componentName = 'animate-j-s-component';

    connectedCallback() {
        const strng: string = "Hello I'm Peppa the Pig and I like fancy animations and delicious barbecue!";
        let str = strng.split("");
        const el = this.shadowRoot.querySelector('#str');
        (function animate() {
            str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
            var running = setTimeout(animate, 90);
        })();
    }

    render() {
        return template(this.html, {});
    }

}

export default AnimateJSComponent;
