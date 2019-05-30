import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import Search from './Search';
import Form from "antd/es/form";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavHearder extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail">
                    <Icon type="home" />
                    Home
                </Menu.Item>
                <Menu.Item key="app" disabled>
                    <Icon type="appstore" />
                    Navigation Two
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
                    }
                >
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavHearder = Form.create({ name: 'register' })(NavHearder);
          