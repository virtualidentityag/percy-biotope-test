import * as styles from './styles.scss';

interface AsyncComponentTemplateData {
    liElements: string[]
}

export default (render: Function, data: AsyncComponentTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div>
            <h2>Async Component</h2>
            <div>
                <h4>Async Dog Breeds Incoming</h4>
                <ul>
                    ${ data.liElements.map( item => `<li>${ item }</li>`) }
                </ul>
            </div>
        </div>
    `;
}
