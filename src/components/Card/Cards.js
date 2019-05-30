import React from 'react';
import 'antd/dist/antd.css';
import {Card, Icon, Avatar, Form} from 'antd';

const { Meta } = Card;

class Cards extends React.Component {
    render(){
        return(
           <div>
               <Card
                   style={{ width: 300 }}
                   cover={
                       <img
                           alt="example"
                           src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                       />
                   }
                   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
               >
                   <Meta
                       avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                       title="Card title"
                       description="This is the description"
                   />
               </Card>
           </div>
        )}
}
export default Cards = Form.create({ name: 'register' })(Cards);
