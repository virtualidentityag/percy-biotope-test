import * as styles from './styles.scss';

interface AnimateJSComponentTemplateData {

}

export default (render: Function, data: AnimateJSComponentTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div id="str"></div>
    `;
}
