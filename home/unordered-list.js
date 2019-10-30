import Component from '../component.js';
import { ListItem } from './list-item.js';

export class UnorderedList extends Component {

    onRender(dom) {
        
        const images = this.props.images;

        images.forEach(image => {
            const props = { image };
            const rawListItem = new ListItem(props);
            const listItem = rawListItem.renderDOM();
            dom.appendChild(listItem);
        });
        
    }

    renderHTML() {
        return /*html*/`
    
        <ul class="photo-gallery" id="photo-gallery">
            </ul>
    `;
    }
}