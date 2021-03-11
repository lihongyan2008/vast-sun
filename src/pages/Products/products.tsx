import React, { Component } from 'react';
import { Carousel, Row, Col, Divider, Card} from 'antd';
import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './products.less';

class Home extends Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    console.log(e.target.value);
    this.setState({ size: e.target.value });
  };   

  render() {
    const { Meta } = Card;    
    return (
      <PageContainer ghost header={{ title: "", breadcrumb: false }}>
        <div className={styles.homeContainer}>
          <div>
                <h3><img className={styles.imgBanner} src={require('../../assets/products/pro_ban.jpg')} alt="logo1"/></h3>
          </div>
          <Divider/>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" sm={{ span:3, offset:3}} xs={24}>
              <div className={`${styles.panelBox} ${styles.panelBoxTitle}`}>
                <Link to="" className={styles.listTitle}>Battery</Link>
              </div>
            </Col>
            <Col className="gutter-row" sm={14} xs={24} >
              <Row gutter={[16,{ xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col className="gutter-row" sm={12} xs={24} >
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/products/battery/lithium.png')} />} >
                      <Meta title="Lithium Battery" description="www.instagram.com" />
                    </Card>
                  </div>
                </Col>
                <Col className="gutter-row" sm={12} xs={24}>
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/products/battery/leadAcid.png')} />} >
                      <Meta title="Lead Acid Battery" description="Nominal Voltage:12V. Rated capacity (10 hour rate): 200Ah." />
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider/>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" sm={{ span:3, offset:3}} xs={24}>
              <div className={`${styles.panelBox} ${styles.panelBoxTitle}`}>
                <Link to="" className={styles.listTitle}>Solar Mounting Bracket</Link>                
              </div>
            </Col>            
            <Col className="gutter-row" sm={14} xs={24} >
              <Row gutter={[16,{ xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col className="gutter-row" sm={12} xs={24}>
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/products/bracket/Groud.png')} />} >
                      <Meta title="Groud Mounting Bracket" description="Aluminum AL6005-T5, Stainless Steel SUS304. 10 Years Warrant and 25 Years Sevice Life" />
                    </Card>
                  </div>                  
                </Col>              
                <Col className="gutter-row" sm={12} xs={24}>
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/products/bracket/Roof.png')} />} >
                      <Meta title="Roof Mounting Bracket" description="Metal Roof.Wind Load: up to 60m/s.Snow Load:1.4kn/m². Tilt Angle:Parallel to Roof Surface." />
                    </Card>
                  </div>
                </Col>
                <Col className="gutter-row" sm={12} xs={24}>
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/products/bracket/Carport.png')} />} >
                      <Meta title="Carport Mounting Bracket" description=" The carport is made of high-strength aluminum alloy to meet customer's demand for safetyinstallation, efficiency and aesthetics. " />
                    </Card>
                  </div>                  
                </Col>              
                <Col className="gutter-row" sm={12} xs={24}>
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/products/bracket/CustoMized.png')} />} >
                      <Meta title="CustoMized Clamp" description="In order to meet your special needs, please provide your requirements, we will work as soon as possible to meet your needs of the design scheme." />
                    </Card>
                  </div>
                </Col>              
              </Row>
            </Col>           
          </Row>
          <Divider/>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" sm={{ span:3, offset:3}} xs={24}>
              <div className={`${styles.panelBox} ${styles.panelBoxTitle}`}>
                <Link to="" className={styles.listTitle}>Others</Link>
              </div>
            </Col>
            <Col className="gutter-row" sm={14} xs={24} >
              <Row gutter={[16,{ xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col className="gutter-row" sm={12} xs={24} >
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/products/others/inverters.png')} />} >
                      <Meta title="Inverters" description="www.instagram.com" />
                    </Card>
                  </div>
                </Col>
                <Col className="gutter-row" sm={12} xs={24}>
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/products/others/panels.png')} />} >
                      <Meta title="Panels" description="www.instagram.com" />
                    </Card>
                  </div>
                </Col>
                <Col className="gutter-row" sm={12} xs={24}>
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/products/others/cables.png')} />} >
                      <Meta title="Cables" description="www.instagram.com" />
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider/>
          <div>
            <h2 className={`${styles.mainTitle} ${styles.titleUnderline}`}>China</h2>
            <ul className={styles.contactList} >
              <li><span>Address: </span> 209-1, building D, chaoloft cultural and creative park, 150 Huayue Road, Langkou community, Dalang street, Longhua District, Shenzhen City, Guangdong Province, China.</li>
              <li><span>Telephone: </span> +86 0755 68706706</li>
              <li><span>Email: </span> sales@vastsun.com.cn</li>
              <li><span>Whatsapp & Wechat & Mobile: </span>  +86 13538211837</li>
              <li><span>Skype: </span> best.li3 </li>
            </ul>
          </div>
          <br/>
        </div>
      </PageContainer>
    );
  }
}

export default Home;