import React from "react"
import title_page from './data/story_pages/title_page.png';
import page_1 from './data/story_pages/page_1.png';
import page_2 from './data/story_pages/page_2.png';
import page_3 from './data/story_pages/page_3.png';
import page_4 from './data/story_pages/page_4.png';
import page_5 from './data/story_pages/page_5.png';
import page_6 from './data/story_pages/page_6.png';
import page_7 from './data/story_pages/page_7.png';
import page_8 from './data/story_pages/page_8.png';
import page_9 from './data/story_pages/page_9.png';
import page_10 from './data/story_pages/page_10.png';
import page_11 from './data/story_pages/page_11.png';
import page_12 from './data/story_pages/page_12.png';
import page_13 from './data/story_pages/page_13.png';
import './App.css';
// Carousel from https://brainhub.eu/blog/react-carousel/
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Story = () => (
    <div
    className="story"
    >
    <Carousel arrows infinite >
        <img src={title_page} alt="Title"/>
        <img src={page_1} alt="Page 1"/>
        <img src={page_2} alt="Page 2"/>
        <img src={page_3} alt="Page 3"/>
        <img src={page_4} alt="Page 4"/>
        <img src={page_5} alt="Page 5"/>
        <img src={page_6} alt="Page 6"/>
        <img src={page_7} alt="Page 7"/>
        <img src={page_8} alt="Page 8"/>
        <img src={page_9} alt="Page 9"/>
        <img src={page_10} alt="Page 10"/>
        <img src={page_11} alt="Page 11"/>
        <img src={page_12} alt="Page 12"/>
        <img src={page_13} alt="Page 13"/>
    </Carousel>
    </div>
);
               
export default Story;