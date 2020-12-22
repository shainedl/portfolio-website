// Carousel from https://brainhub.eu/blog/react-carousel/
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Story = () => (
    <div
    className="story"
    >
    <Carousel arrows infinite >
        <img src='/story_pages/title_page.png' alt="Title"/>
        <img src='/story_pages/page_1.png' alt="Page 1"/>
        <img src='/story_pages/page_2.png' alt="Page 2"/>
        <img src='/story_pages/page_3.png' alt="Page 3"/>
        <img src='/story_pages/page_4.png' alt="Page 4"/>
        <img src='/story_pages/page_5.png' alt="Page 5"/>
        <img src='/story_pages/page_6.png' alt="Page 6"/>
        <img src='/story_pages/page_7.png' alt="Page 7"/>
        <img src='/story_pages/page_8.png' alt="Page 8"/>
        <img src='/story_pages/page_9.png' alt="Page 9"/>
        <img src='/story_pages/page_10.png' alt="Page 10"/>
        <img src='/story_pages/page_11.png'alt="Page 11"/>
        <img src='/story_pages/page_12.png' alt="Page 12"/>
        <img src='/story_pages/page_13.png' alt="Page 13"/>
    </Carousel>
    </div>
);
               
export default Story;