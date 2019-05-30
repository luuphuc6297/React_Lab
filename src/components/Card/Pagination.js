import React from 'react';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import Form from "antd/es/form";
import ListView from './ListView';

class Paginations extends React.Component {
    state = {
        current: 1,
    };

    onChange = page => {
        console.log(page);
        this.setState({
            current: page,
        });
    };

    render() {
        return(
            <div>
                <ListView page={this.state.current}/>
                <Pagination current={this.state.current} onChange={this.onChange} total={50}/>
            </div>
        );
    }
}

export default Paginations = Form.create({ name: 'register' })(Paginations);