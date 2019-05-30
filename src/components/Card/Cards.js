import React from 'react';
import 'antd/dist/antd.css';
import {Card, Icon, Avatar, Form} from 'antd';

const {Meta} = Card;

class Cards extends React.Component {
    handleClickCart = () => {
        var cat=localStorage.getItem('cart')
        try {
            cat = JSON.parse(cat)
        } catch (error) {
            cat = []
        }
        
        cat.push(this.props.itemm)
        localStorage.setItem('cart', JSON.stringify(cat))
    }
    render() {
        return (
            <div>
                <Card
                    style={{width: 350}}
                    cover={
                        <img
                            height={220}
                            alt="example"
                            src={this.props.img}
                        />
                    }
                    actions={[<Icon type="shopping-cart" onClick={this.handleClickCart}/>, <Icon type="ellipsis"/>]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                        title={this.props.title}
                        description="This is the description"
                    />
                </Card>
            </div>
        )
    }
}

export default Cards = Form.create({name: 'register'})(Cards);
