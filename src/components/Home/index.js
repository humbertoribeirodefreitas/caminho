import React from "react";
import './styles'
import {youtubeiframe} from'react-native-youtube-iframe';
function Home() {
    return (
      <view Style={Style.Conteiner}>
           <youtubeiframe
           videoId="ZU008mB5lCo"
           height={Video_Heiht }
           />
      </view>
    );
  }
  
  export default Home;
  