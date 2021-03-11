import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './home.less';

class Home extends Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    console.log(e.target.value);
    this.setState({ size: e.target.value });
  };
  
  render() {
    return (
      <PageContainer ghost header={{ title: "", breadcrumb: false }}>
        <div className={styles.homeContainer}>
          <Carousel autoplay easing="linear">
            <Link to="/products">
              <h3><img className={styles.imgBanner} src={require('../../assets/banner/banner01.jpg')} alt="logo1"/></h3>
            </Link>
            <Link  to="/products">
              <h3><img className={styles.imgBanner} src={require('../../assets/banner/banner02.jpg')} alt="logo2"/></h3>
            </Link>
            <Link  to="/products">
              <h3><img className={styles.imgBanner} src={require('../../assets/banner/banner03.jpg')} alt="logo3"/></h3>
            </Link>
            <Link  to="/products">
              <h3><img className={styles.imgBanner} src={require('../../assets/banner/banner04.jpg')} alt="logo4"/></h3>
            </Link>
          </Carousel>
          <div>
            <h2 className={styles.mainTitle}>PRODUCTS CENTER</h2>
          </div>
          <div>
            <h2 className={styles.mainTitle}>ABOUT US</h2>          
          </div>
          <div>
            <h2 className={styles.mainTitle}>LATEST NEWS</h2>          
          </div>         
          <div>
            <h2 className={styles.mainTitle}>MAIN GLOBAL DELIVERY</h2>
          </div>
          <div>
            <h2 className={`${styles.mainTitle} ${styles.titleUnderline}`}>CONTACT US</h2>
            <ul className={styles.contactList} >
              <li><span>Address: </span> 209-1, building D, chaoloft cultural and creative park, 150 Huayue Road, Langkou community, Dalang street, Longhua District, Shenzhen City, Guangdong Province, China.</li>
              <li><span>Telephone: </span> +86 0755 68706706</li>
              <li><span>Email: </span> sales@vastsun.com.cn</li>
              <li><span>Whatsapp & Wechat & Mobile: </span>  +86 13538211837</li>
              <li><span>Skype: </span> best.li3 </li>
            </ul>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default Home;