import Component from '../component.js';
import { Header } from './header.js';

export class App extends Component {

    onRender(dom) {
        const rawHeader = new Header();
        const header = rawHeader.renderDOM();
        dom.prepend(header);
    }

    
    renderHTML() {
        return /*html*/`
            <main>

            </main>
        `;
    }
    
}