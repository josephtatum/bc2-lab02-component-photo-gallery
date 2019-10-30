import './html-equal.js';
import { renderImage } from '../home/render-image.js';
const test = QUnit.test;

QUnit.module('Render Image');

test('Renders HTML from data', assert => {
    // arrange
    const narwhal = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
        <li title="A unicorn and a narwhal nuzzling their horns" class="gallery-item" style="background-image: url('http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg')">
            <div class="item-description">
                <h2 class="image-title">UniWhal</h2>
                <p>Horns: 1</p>
            </div>
        </li>
    `;

    // act
    const html = renderImage(narwhal);

    // assert
    assert.htmlEqual(html, expected);
});