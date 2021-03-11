import React, { Component } from 'react';
import { Carousel, Radio, Divider, Row, Col, Image } from 'antd';
import styles from './home.less';

class Home extends Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  
  render() {
    const { size } = this.state;
    return (
      <div className={styles.homeContainer}>
        <Divider/>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" sm={{ span:6, offset:3}} xs={24}>
            <div className={styles.panelBox}>col-6</div>
          </Col>
          <Col className="gutter-row" sm={6} xs={24} >
            <div className={styles.panelBox}>col-6</div>
          </Col>
          <Col className="gutter-row" sm={6} xs={24}>
            <div className={styles.panelBox}>col-6</div>
          </Col>
        </Row>
        <div className={styles.imgs}>
          <Image.PreviewGroup>
            <Image
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <Image
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
          </Image.PreviewGroup>
        </div>
        <Carousel autoplay>
          {/* <div className="slick-slide">
            <h3><img src={require('../../assets/banner/banner01.jpg')} alt="logo1"/></h3>
          </div>
          <div className="slick-slide">
            <h3><img src={require('../../assets/banner/banner02.jpg')} alt="logo2"/></h3>
          </div>
          <div className="slick-slide">
            <h3><img src={require('../../assets/banner/banner03.jpg')} alt="logo3"/></h3>
          </div> */}
        </Carousel>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br/><br/><br/><br/><br/>
      </div>
    );
  }
}

export default Home;