import React from 'react';
import 'antd/dist/antd.css';
import {Form, Layout} from 'antd';
// import Cards from '../Card/Cards';
import Header from '../Header/ListCartPage';
import Sider from '../Sider/Sider';
import { Layout } from 'antd';

const { Footer, Content } = Layout;

class Layout extends React.Component {
    render() {
        return (
        <div>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    )}
}
export default Layout = Form.create({ name: 'register' })(Layout);