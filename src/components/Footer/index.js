import React from 'react';

import SocNetworks from './SocNetworks';
import Information from './Information';
import CopyRight from './CopyRight';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <section className={`${styles.footerSection}`}>
      <SocNetworks />
      <Information />
      <CopyRight />
    </section>
  );
};

export default Footer;
