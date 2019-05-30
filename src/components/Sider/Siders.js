import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import Form from "antd/es/form";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Siders extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
              <Icon type="laptop" />
              <span>Laptop</span>
            </span>
                    }
                >
                    <MenuItemGroup key="g1" title="Macbook Air">
                        <Menu.Item key="1"> Macbook Air 2015</Menu.Item>
                        <Menu.Item key="2"> Macbook Air 2016</Menu.Item>
                        <Menu.Item key="3"> Macbook Air 2017</Menu.Item>
                        <Menu.Item key="4"> Macbook Air 2018</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Macbook Pro">
                        <Menu.Item key="5">Macbook Pro 2015</Menu.Item>
                        <Menu.Item key="6">Macbook Pro 2016</Menu.Item>
                        <Menu.Item key="7">Macbook Pro 2017</Menu.Item>
                        <Menu.Item key="8">Macbook Pro 2018</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
             <Icon type="mobile" />
              <span>Mobile</span>
            </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={
                        <span>
              <Icon type="book" />
              <span>Book</span>
            </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default Siders = Form.create({ name: 'register' })(Siders);
