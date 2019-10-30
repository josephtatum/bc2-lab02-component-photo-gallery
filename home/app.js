import Component from '../component.js';
import { Header } from './header.js';
import { Footer } from './footer.js';
import { UnorderedList } from './unordered-list.js';


export class App extends Component {

    onRender(dom) {
        const rawHeader = new Header();
        const header = rawHeader.renderDOM();
        dom.prepend(header);

        const rawUl = new UnorderedList();
        const ul = rawUl.renderDOM();
        dom.append(ul);

        const rawFooter = new Footer();
        const footer = rawFooter.renderDOM();
        dom.append(footer);
    }

    
    renderHTML() {
        return /*html*/`
            <main>

            </main>
        `;
    }
    
}