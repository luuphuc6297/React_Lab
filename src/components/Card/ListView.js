import React from 'react';
import 'antd/dist/antd.css';
import {List, Card} from 'antd';
import Cards from "../Card/Cards";
import Form from "antd/es/form";
import Description from "./Descriptions";
import Modals from  './Modals';
import Paginations from "./Pagination";

const page1 = [
    {
        title: 'Lenovo 720s',
        img: "https://s1.upanh.pro/2019/05/29/surface_laptop_2_review.jpg",
    },
    {
        title: 'HP Studio G4',
        img: "https://s2.upanh.pro/2019/05/29/hpzbookstudiog45thinkpro.jpg"
    },
    {
        title: 'Title 3',
        img: "https://s3.upanh.pro/2019/05/29/hpspectrex36013t6thinkpro.jpg"
    },
    {
        title: 'Title 4',
        img: "https://s1.upanh.pro/2019/05/29/lenovo_legion_y7000_3.jpg"
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
];
const page2 = [
    {
        title: 'Title 7',
        img: "https://s1.upanh.pro/2019/05/29/surface_laptop_2_review.jpg",
    },
    {
        title: 'Title 8',
        img: "https://s1.upanh.pro/2019/05/29/surface_laptop_2_review.jpg",
    },
    {
        title: 'Title 9',
        img: "https://s1.upanh.pro/2019/05/29/surface_laptop_2_review.jpg",
    },
    {
        title: 'Title 10',
        img: "https://s1.upanh.pro/2019/05/29/surface_laptop_2_review.jpg",
    },
    {
        title: 'Title 11',
        img: "https://s1.upanh.pro/2019/05/29/surface_laptop_2_review.jpg",
    },
    {
        title: 'Title 12',
        img: "https://s1.upanh.pro/2019/05/29/surface_laptop_2_review.jpg",
    },
];


class ListView extends React.Component {
    handlePage = () => {
        if(this.props.page === 1)
            return page1;
        else if(this.props.page === 2)
            return page2;
    };

    componentWillMount() {
        localStorage.setItem('page1', page1);
        localStorage.setItem('page2', page2);
    }

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
                                <Cards itemm={item} title={item.title} img={item.img}/>
                            </div>
                            <div style={{margin: '70px'}}>
                                <Description/>
                                <Modals/>
                            </div>

                        </div>
                    </List.Item>
                )}
            />
        );
    }
}
export default ListView = Form.create({name: 'register'})(ListView);

