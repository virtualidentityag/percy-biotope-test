import Component from '@biotope/element';
import template from './template';

interface StaticComponentProps {

}

interface StaticComponentState {

}

class StaticComponent extends Component< StaticComponentProps, StaticComponentState > {
    static componentName = 'static-component';

    render() {
        return template(this.html, {});
    }
}

export default StaticComponent;
