import React from 'react';
import 'antd/dist/antd.css';
import "./Layout.css"
import {Form, Layout} from 'antd';
import NavHeader from '../Header/NavHeader';
import Search from '../Header/Search'
import {Row, Col} from 'antd';
import FooterPage from '../Footer/Footer';
import ListView from '../Card/ListView';
import Paginations from "../Card/Pagination";
import Siders from '../Sider/Siders';
import {BrowserRouter} from "react-router-dom";
import LoginPage from "../HomePage/LoginPage";
import Register from "../HomePage/Register";
import HomePageContent from "../HomePage/HomePageContent";
import { Route, Switch} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const {Header, Footer, Sider, Content} = Layout;


class Layouts extends React.Component {
    render() {
        return (
            <div style={{marginRight: '4px', height: '100vh', position: 'relative'}}>
                <Row gutter={8}>
                    <Col span={24}>
                        <div>
                            <Header style={headerStyleSheet}>
                                <Search/>
                                <NavHeader/>
                            </Header>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
                <div style={{ bottom: 0, width: '100%'}}>
                    <FooterPage/>
                </div>
            </div>
        )
    }
}

const headerStyleSheet = {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
};
const contentStyleSheet = {
    alignItems: 'center',
    justifyContent: 'center',
};

export default Layouts = Form.create({name: 'register'})(Layouts);