import YouTube from '@u-wave/react-youtube';
import utilStyles from '../styles/utils.module.css'
 
export default function Thumbnail(props) {
  return (
        <div className="project">
            <YouTube className='player' video={props.video} />
            <div className={utilStyles.headingMd}>{props.category}</div>
            <div className={utilStyles.headingLg}>{props.title}</div>
        </div>
  );
}