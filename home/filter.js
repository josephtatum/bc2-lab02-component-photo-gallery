import images from '../data/images.js';
import Component from '../component.js';

export class Filter extends Component {

    onRender() {
        
    }

    renderHTML() {
        return /*html*/`
    
        <aside class="selection-menu-section">
            <select class="selection-menu" id="selection-menu">
                <option value="">Show All</option>
                <option value="narwhal">Narwhal</option>
                <option value="rhino">Rhino</option>
                <option value="unicorn">Unicorn</option>
                <option value="unilego">Unilego</option>
                <option value="markhor">Markhor</option>
                <option value="mouflon">Mouflon</option>
                <option value="addax">Addax</option>
                <option value="chameleon">Chameleon</option>
                <option value="lizard">Lizard</option>
                <option value="dragon">Dragon</option>
            </select>
        </aside>
    `;
    }
}