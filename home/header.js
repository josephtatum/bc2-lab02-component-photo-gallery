import Component from '../component.js';

export class Header extends Component {
    renderHTML() {
        return /*html */`
        <header>
            <h1 class="page-title">Photo Gallery</h1>
        </header>
`;
    }
}