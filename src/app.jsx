
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Searchheader from './components/search_header/search_header';
import Videolist from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';


function App({youtube}) {
  const [ videos, setVideos ] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  }

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos))
  
  },[]);

const search = query => {
  youtube.search(query)
  .then(videos => setVideos(videos))
 
};


 return (  
  <div className={styles.app}>
           <Searchheader onSearch={search} />
           <section className={styles.content}>
           {
           selectedVideo &&
           (<div className={styles.detail}>
             <VideoDetail video={selectedVideo} />           
           </div>)

           }
           <div className={styles.list}><Videolist 
                                           videos={videos} 
                                           onVideoClick={selectVideo} 
                                           display={selectedVideo? 'list' : 'grid' } /> </div> 
           </section>
  </div>
  
  );
}

export default App;
