import Component from '@biotope/element';
import template from './template';

interface AsyncComponentProps {

}

interface AsyncComponentState {
    liElements: string[]
}

class AsyncComponent extends Component< AsyncComponentProps, AsyncComponentState > {
    static componentName = 'async-component';
    constructor() {
        super();
        this.state = {
            liElements: [
                '🐡💨',
                'hello world! 🐦'
            ]
        }
    }

    connectedCallback() {
        fetchDogBreeds().then((response) => {
            const breeds = Object.keys(response.message);
            breeds.map(breed => {
                this.setState({
                    liElements: [...this.state.liElements, breed]
                })
            })
        }).catch((error) => console.log(error));
    }

    render() {
        return template(this.html, { liElements: this.state.liElements });
    }
}

export default AsyncComponent;

const fetchDogBreeds = (): Promise<any> => new Promise((resolve, reject) =>  {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response) {
            if (response.status === 200) {
                const data = response.json();
                resolve(data);
            } else {
                reject(new Error('no breeds'));
            }
        })
        .catch((error) => {
            reject(error);
        });
})