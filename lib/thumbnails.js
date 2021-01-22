import YouTube from '@u-wave/react-youtube';
import utilStyles from '../styles/utils.module.css'
 
export default function Thumbnail(props) {
  return (
        <div>
            <YouTube className={utilStyles.img} video={props.video} />
            <div className={utilStyles.blog_details}>{props.category}</div>
        </div>
  );
}