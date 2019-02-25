import * as styles from './styles.scss';

interface AnimateTemplateData {

}

export default (render: Function, data: AnimateTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="animation">
            <div class="flip-box"></div>
            <div class="flip-box"></div>
            <div class="flip-box"></div>
        </div>
    `;
}
