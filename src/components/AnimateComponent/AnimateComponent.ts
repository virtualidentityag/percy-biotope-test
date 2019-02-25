import Component from '@biotope/element';
import template from './template';

interface AnimateComponentProps {

}

interface AnimateComponentState {

}

class AnimateComponent extends Component< AnimateComponentProps, AnimateComponentState > {
    static componentName = 'animate-component';

    render() {
        return template(this.html, {});
    }
}

export default AnimateComponent;
