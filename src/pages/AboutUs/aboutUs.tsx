import React, { Component } from 'react';
import { Card, Divider, Row, Col } from 'antd';
import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './aboutUs.less';

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
          <div>
              <h3><img className={styles.imgBanner} src={require('../../assets/contactUs.svg')} alt="about-us"/></h3>
          </div>          
          <h2 className={styles.mainTitle}>ABOUT US</h2>
          <div className={styles.introduceContainer}>
            <Row>
              <Col sm={12} xs={24} className={styles.gridStyle}>
                <p><img src="" alt=""/></p>                                
              </Col>
              <Col sm={12} xs={24} className={styles.gridStyle}>
                <p>Vast Sun is a unique company with vertical integration of all technologies needed for ESS (Energy storage system) including cathode material, lithium cell, BMS and system integration. With self developed key technologies and dedication to ESS applications, 
                  Vast Sun had been pioneering the global ESS market from 2013.<br/><br/>
                  With more than 1.5 GWh products been commissioned in 50 countries until end 2019, Vast Sun is proudly contributing our strength in changing the way people generating, transferring and using the electricity.<br/><br/>
                  Your dream of future energy is our heart-oriented motivation, Force awakens.
                </p>                                
              </Col>
            </Row>
          </div>
          <Divider/>
          <h2 className={styles.mainTitle}>HONORS</h2>
          <div className={styles.honorContainer}>
          <Row>
            <Col sm={{ span:4}} xs={24}>
              <img src={require('../../assets/honors/honor01.jpg')} alt="honor01"/>              
            </Col>
            <Col sm={{ span:4}} xs={24}>
              <img src={require('../../assets/honors/honor02.jpg')} alt="honor02"/>              
            </Col>
            <Col sm={{ span:4}} xs={24}>
              <img src={require('../../assets/honors/honor03.jpg')} alt="honor03"/>              
            </Col>
            <Col sm={{ span:4}} xs={24}>
              <img src={require('../../assets/honors/honor04.jpg')} alt="honor04"/>              
            </Col>
            <Col sm={{ span:4}} xs={24}>
              <img src={require('../../assets/honors/honor05.jpg')} alt="honor05"/>              
            </Col>
            <Col sm={{ span:4}} xs={24}>
              <img src={require('../../assets/honors/honor06.jpg')} alt="honor06"/>              
            </Col>
          </Row>
          </div>
          <Divider/>
          <h2 className={styles.mainTitle}>DEVELOPMENT PATH</h2>
          <div className={styles.developLine}>
            <Row>
              <Col sm={{ span:8, offset:8}} xs={24}>
                <img className={ styles.imgBanner }  src={require('../../assets/developLine.png')} alt="about-us"/>
              </Col>
            </Row>
          </div>
          <Divider/>
          <div>
            <h2 className={`${styles.mainTitle} ${styles.titleUnderline}`}> China </h2>
            <ul className={styles.contactList} >
              <li><span>Address: </span> 209-1, building D, chaoloft cultural and creative park, 150 Huayue Road, Langkou community, Dalang street, Longhua District, Shenzhen City, Guangdong Province, China.</li>
              <li><span>Telephone: </span> +86 0755 68706706</li>
              <li><span>Email: </span> sales@vastsun.com.cn</li>
              <li><span>Whatsapp & Wechat & Mobile: </span>  +86 13538211837</li>
              <li><span>Skype: </span> best.li3 </li>
            </ul>
          </div>         
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </PageContainer>
    );
  }
}

export default Home;