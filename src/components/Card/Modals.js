import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import Form from "antd/es/form";

class Modals extends React.Component {
    state = {
        title: 'Title',
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
            ModalText: 'CPU: Core Inter i5',
            title: "Lenovo 720s"
        });
    };
    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    handleTitle = () =>{
        this.setState({
            title:"LENOVO 720s",
        })
    };
    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    View Detail
                </Button>
                <Modal
                    title= "Title"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <p>{ModalText}</p>
                </Modal>
            </div>
        );
    }
}

export default Modals = Form.create({name: 'register'})(Modals);
