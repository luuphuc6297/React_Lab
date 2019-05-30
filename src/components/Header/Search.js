import React from 'react';
import 'antd/dist/antd.css';
import './Search.css';
import Form from "antd/es/form";
import { Input } from 'antd';

class Search extends React.Component{
    render(){
        return (<Input placeholder="Search" />
        );
    }
}

export default Search = Form.create({ name: 'register' })(Search);

