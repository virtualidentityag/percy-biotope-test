import Component from '@biotope/element';
import template from './template';

interface AnimateProps {

}

interface AnimateState {

}

class Animate extends Component<AnimateProps, AnimateState> {
    static componentName = 'animate';

    render() {
        return template(this.html, {});
    }
}

export default Animate;
