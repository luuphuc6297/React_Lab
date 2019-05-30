import React from 'react';
import 'antd/dist/antd.css';
import {Form, Layout, Row, Col} from 'antd';
import ListView from '../Card/ListView';
import Siders from '../Sider/Siders';
import Paginations from "../Card/Pagination";
import Carousel from '../Carousel/Carousel';

class HomePageContent extends React.Component {
    render() {
        return (
            <div>
                <Col span={3}>
                    <div>
                        <Siders/>
                    </div>
                </Col>
                <Col span={21}>
                    <div style={{marginTop: '-9px', marginLeft: "-24px"}}>
                        <div style={{textAlign: 'center'}}>
                            <div style={{verticalAlign: 'center'}}>
                                <div>
                                    <Carousel/>
                                </div>
                                <div style={{padding: '60px'}}>
                                    <Paginations/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </div>
        )
    }
}

export default HomePageContent;