import React from 'react';
import 'antd/dist/antd.css';
import { List, Card } from 'antd';
import Cards from "./Card/Cards";
import Form from "antd/es/form";
const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
];
class ListView extends React.Component {
    render() {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    {/*<Card title={item.title}>Card content</Card>*/}
                    <Cards/>
                </List.Item>
            )}
        />
    );
}}

export default ListView = Form.create({ name: 'register' })(ListView);

