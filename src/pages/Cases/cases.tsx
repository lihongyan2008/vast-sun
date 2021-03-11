import React, { Component } from 'react';
import { Carousel, Row, Col, Divider, Card} from 'antd';
import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './cases.less';

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
                <h3><img className={styles.imgBanner} src={require('../../assets/cases/case_ban.png')} alt="logo1"/></h3>
          </div>
          <Divider/>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" sm={{ span:22, offset:1}} xs={24} >
              <Row gutter={[16,{ xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col className="gutter-row" sm={12} xs={24} >
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/cases/case01.png')} />} >
                    </Card>
                  </div>
                </Col>
                <Col className="gutter-row" sm={12} xs={24}>
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/cases/case02.png')} />} >
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider/>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" sm={{ span:22, offset:1}} xs={24} >
              <Row gutter={[16,{ xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col className="gutter-row" sm={12} xs={24} >
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/cases/case03.png')} />} >
                    </Card>
                  </div>
                </Col>
                <Col className="gutter-row" sm={12} xs={24}>
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/cases/case04.png')} />} >
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider/>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" sm={{ span:22, offset:1}} xs={24} >
              <Row gutter={[16,{ xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col className="gutter-row" sm={12} xs={24} >
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/cases/case05.png')} />} >
                    </Card>
                  </div>
                </Col>
                <Col className="gutter-row" sm={12} xs={24}>
                  <div className={styles.panelBox}>
                    <Card hoverable
                      cover={<img alt="example" src={require('../../assets/cases/case06.png')} />} >
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider/>
          <div>
            <h2 className={`${styles.mainTitle} ${styles.titleUnderline}`}> <Link to="/home">China</Link></h2>
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