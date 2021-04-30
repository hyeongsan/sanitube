
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Searchheader from './components/search_header/search_header';
import Videolist from './components/video_list/video_list';

function App({youtube}) {
  const [ videos, setVideos ] = useState([]);

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
           <Videolist videos={videos}/>       
  </div>
  
  );
}

export default App;
