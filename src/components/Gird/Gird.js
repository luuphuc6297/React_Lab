import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Form from "antd/es/form";
import NavHeader from '../Header/NavHeader';
import Siders from '../Sider/Siders';
import Search from '../Header/Search'
import MenuCard from '../Card/MenuCard';
import ListView from '../Card/ListView';

class Gird extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
        </div>
    )}
}
export default Gird = Form.create({ name: 'register' })(Gird);



