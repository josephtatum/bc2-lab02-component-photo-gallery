import images from '../data/images.js';
import Component from '../component.js';
import { Header } from './header.js';
import { Footer } from './footer.js';
import { UnorderedList } from './unordered-list.js';
import { Filter } from './filter.js';


export class App extends Component {

    onRender(dom) {
        
        const props = { images };

        const rawHeader = new Header();
        const header = rawHeader.renderDOM();
        dom.prepend(header);

        const rawUl = new UnorderedList(props);
        const ul = rawUl.renderDOM();
        const gallerySection = dom.querySelector('.photo-gallery-section');
        gallerySection.appendChild(ul);

        const rawFilter = new Filter({
            images: images,
            onFilter: (keyword) => {
                let filteredArray = null;

                filteredArray = images.filter(image => image.keyword === keyword);

                if (filteredArray.length === 0) {
                    filteredArray = images;
                }
                
                const updatedProps = { images: filteredArray };
                rawUl.update(updatedProps);
            }
        });

        const filter = rawFilter.renderDOM();

        const filterSection = dom.querySelector('.selection-menu-section');
        filterSection.appendChild(filter);
        
        

        const rawFooter = new Footer();
        const footer = rawFooter.renderDOM();
        dom.appendChild(footer);
    }

    
    renderHTML() {
        return /*html*/`
        
            <main>
                <aside class="selection-menu-section"></aside>
                <section class="photo-gallery-section"></section>
            </main>
        
        `;
    }
    
}