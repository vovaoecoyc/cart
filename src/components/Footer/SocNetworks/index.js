import React from 'react';

import vkIcon from '../../../images/vk-icon.png';
import facebookIcon from '../../../images/facebook-icon.png';
import okIcon from '../../../images/ok-icon.png';
import pIcon from '../../../images/p-icon.png';
import hearthIcon from '../../../images/hearth-icon.png';
import instagramIcon from '../../../images/instagram-icon.png';
import youtubeIcon from '../../../images/youtube-icon.png';
import styles from './SocNetworks.module.css';

const SocNetworks = () => {
  return (
    <div className={`${styles.socNetworksBlock}`}>
      <span>SHOP24 в социальных сетях:</span>
      <img src={vkIcon} alt="vk" />
      <img src={facebookIcon} alt="facebook" />
      <img src={okIcon} alt="odnoklassiki" />
      <img src={pIcon} alt="p" />
      <img src={hearthIcon} alt="hearth" />
      <img src={instagramIcon} alt="hearth" />
      <img src={youtubeIcon} alt="youtube" />
    </div>
  );
};

export default SocNetworks;
