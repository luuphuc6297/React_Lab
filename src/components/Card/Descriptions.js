import React from 'react';
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import Form from "antd/es/form";

class Description extends React.Component {
    render() {
        return (
            <div>
                <Descriptions
                    title="Responsive Descriptions"
                    border
                    column={{xxl: 15, xl: 3, lg: 3, md: 2, sm: 2, xs: 2}}
                >
                    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                    <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                    <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                    <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                    <Descriptions.Item label="Config Info">
                        Data disk type: MongoDB
                        <br/>
                        Database version: 3.4
                        <br/>
                        Package: dds.mongo.mid
                        <br/>
                        Storage space: 10 GB
                        <br/>
                        Replication_factor:3
                        <br/>
                        Region: East China 1
                    </Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}
export default Description = Form.create({ name: 'register' })(Description);
