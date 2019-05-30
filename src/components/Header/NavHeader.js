import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon, Dropdown, Button, message  } from 'antd';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Form from "antd/es/form";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const StyledBadge = withStyles(theme => ({
    badge: {
        top: '50%',
        right: -3,
        // The border color match the background color.
        border: `2px solid ${
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
            }`,
    },
}))(Badge);

class NavHeader extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    handleClickCart = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail">
                    <Icon type="home" />
                    Home
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
             <Icon type="laptop" />
              Laptop
            </span>
                    }
                >
                    <MenuItemGroup title="Macbook Air">
                        <Menu.Item key="setting:1">Macbook Air 2015</Menu.Item>
                        <Menu.Item key="setting:2">Macbook Air 2016</Menu.Item>
                        <Menu.Item key="setting:3">Macbook Air 2017</Menu.Item>
                        <Menu.Item key="setting:4">Macbook Air 2018</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Macbook Pro">
                        <Menu.Item key="setting:5">Macbook Pro 2015</Menu.Item>
                        <Menu.Item key="setting:6">Macbook Pro 2016</Menu.Item>
                        <Menu.Item key="setting:7">Macbook Pro 2017</Menu.Item>
                        <Menu.Item key="setting:8">Macbook Pro 2018</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
            <Icon type="mobile" />
              Mobile Phone
            </span>
                    }
                >
                    <MenuItemGroup title="Apple">
                        <Menu.Item key="setting:1">Iphone XR Max</Menu.Item>
                        <Menu.Item key="setting:2">Iphone XR</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Sony">
                        <Menu.Item key="setting:3">Xperia XZ</Menu.Item>
                        <Menu.Item key="setting:4">Xperia XZ1</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
              <Icon type="customer-service" />
              Head Phone
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
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
              <Icon type="usb" />
              Accessories
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
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
              <Icon type="user" />
              My Account
            </span>
                    }
                >
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu
                    title={
            <span className="submenu-title-wrapper">
                <div onClick={this.handleClickCart}>
                    <IconButton aria-label="Cart" >
                      <StyledBadge badgeContent={0} color="primary">
                        <ShoppingCartIcon/>
                      </StyledBadge>
                    </IconButton>
                </div>
            </span>
                    }
                >
                </SubMenu>
            </Menu>
        );
    }
}
export default NavHeader = Form.create({ name: 'register' })(NavHeader);
          