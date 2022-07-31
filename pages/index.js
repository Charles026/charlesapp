import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import IconCamera from '@douyinfe/semi-icons'
import {Button,Nav,Tag, Space,Col, Row} from '@douyinfe/semi-ui';
import CoverFlexPaper from '../public/project/flexpaper/cover-flexpaper@2x.png';
import React from 'react';
import Ahdai from '../public/ahdai.png'




export default function Home() {
  return (
    <div>
      <Head>
      <title>Document</title>
      <meta content="IE=edge"/>
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>

      <Nav mode={'horizontal'}
              items={[
                  { itemKey: 'Work', 
                  text: 'Work', 
                  },
                  { itemKey: 'About', 
                    text: 'About',
                    link: 'https://semi.design/zh-CN/navigation/navigation#nav-header'
                  },
                  
              ]}
              onClick={key => console.log(key)}
              defaultSelectedKeys= {'Work'}
          />


        <div className={styles.HomeHeaderWrapper}>

        <div className={styles.homeTitle}>
          I'm Charles, an UI/UX Designer.
        </div> 
        
        <Row className={styles.homeDescriptionWrapper}>
        <Col span={16}>
        <p className={styles.homeDescription}>As a designer, I'm always working to make people's lives simpler by delivering user-centered digital experiences that solve complex problems.<br/>I believe that this is one way in which designers can make an impact on human life.</p> 
        </Col>
        </Row>
        <div>
          <Row>
            <Col span={8}>
            <div className={styles.projectInfo}>
              <h1>FlexPaper  <br/>金山文档
              </h1>
            <Space>
            <Tag color='grey' type='light' size='large'> UI </Tag>
            <Tag color='grey' type='light' size='large'> UX </Tag>
            <Tag color='grey' type='light' size='large'> Design System </Tag>
           </Space>
            </div>
            <div className={styles.viewButtonWrapper}>
            
            <Button size='large' type='primary' theme='solid'>
             查看项目
            </Button>
            </div>
            
              </Col>
            <Col span={16}>
            <Link href='https://kdocs.cn/l/cbPrY3cRL8jU'>
              <a >
             <div className = {styles.imageCoverWrapper}>
            <Image className={styles.imageCover} src ={CoverFlexPaper} alt="cover"/>
            </div>
            </a>
            </Link>
              </Col>
           </Row>

          </div>
        </div>
        <Footer/>
      </main>
      
    </div>
  )
}
