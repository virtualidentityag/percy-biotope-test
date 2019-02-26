import Component from '@biotope/element';
import template from './template';

interface AnimateJSComponentProps {

}

interface AnimateJSComponentState {

}

class AnimateJSComponent extends Component< AnimateJSComponentProps, AnimateJSComponentState > {
    static componentName = 'animate-j-s-component';

    render() {
        return template(this.html, {});
    }
}

export default AnimateJSComponent;
