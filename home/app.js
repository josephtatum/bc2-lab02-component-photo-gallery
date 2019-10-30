import images from '../data/images.js';
import Component from '../component.js';
import { Header } from './header.js';
import { Footer } from './footer.js';
import { UnorderedList } from './unordered-list.js';
import { ListItem } from './list-item.js';
import { Filter } from './filter.js';


export class App extends Component {

    onRender(dom) {
        
        const props = { images };

        const rawHeader = new Header();
        const header = rawHeader.renderDOM();
        dom.prepend(header);

        const rawFilter = new Filter();
        const filter = rawFilter.renderDOM();
        dom.append(filter);

        const rawUl = new UnorderedList(props);
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