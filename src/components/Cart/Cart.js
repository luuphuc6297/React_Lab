import React from 'react';
import 'antd/dist/antd.css';
import {List, Card} from 'antd';
import Cards from "../Card/Cards";
import Form from "antd/es/form";
import Description from "../Card/Descriptions";

// const page1 = [
//     {
//         title: 'Lenovo 720s',
//         img: "https://s1.upanh.pro/2019/05/29/surface_laptop_2_review.jpg",
//     },
// ];

class Cart extends React.Component {
    handlePage = () => {
        var temp = localStorage.getItem('cart');
        var arr = [temp];
        return arr
    };
    render() {
        return (
            <List
                // grid={{
                //     "gutter: 1,
                //     xs: 1,
                //     sm: 2,
                //     md: 4,
                //     lg: 4,
                //     xl: 6,
                //     xxl: 3,
                // }}
                dataSource={this.handlePage()}
                renderItem={item => (
                    <List.Item>
                        {/*<Card title={item.title}>Card content</Card>*/}
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div>
                                <Cards title={item.title} img={item.img}/>
                            </div>
                            <div style={{margin: '70px'}}>
                                <Description/>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        );
    }
}
export default Cart = Form.create({name: 'register'})(Cart);