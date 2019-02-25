import * as styles from './styles.scss';

interface AnimateComponentTemplateData {

}

export default (render: Function, data: AnimateComponentTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="animate__component">
            <div class="flipbox flipbox--1">OK</div>
            <div class="flipbox flipbox--2">OK</div>
            <div class="flipbox flipbox--3">OK</div>
            <div class="flipbox flipbox--4">OK</div>
            <div class="flipbox flipbox--5">NOT OK</div>
        </div>
    `;
}
