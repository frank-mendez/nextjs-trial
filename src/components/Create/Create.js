import React, {Fragment} from 'react'
import StepWizard from 'react-step-wizard';
import { Input, Row, Col, Button, Form, Upload } from 'antd';
import { InboxOutlined, RightCircleOutlined, LeftOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input

const Create = () => {
    const [form] = Form.useForm();

    const Step1 = ({ nextStep }) => {
        
        return (
            <Fragment>
                <Form
                form={form}
                layout="vertical"
                >
                <Form.Item label="Name of Business" required tooltip="This is a required field">
                    <Input placeholder="Name of Business" size='large' />
                </Form.Item>
                </Form>
                <Button onClick={() => nextStep()} style={{marginTop: 20, float: 'right'}} type="primary" icon={<RightCircleOutlined />} size='large'>
                Next
                </Button>
            </Fragment>
        )
    }

    const Step2 = ({ nextStep, previousStep }) => {

        const normFile = e => {
            console.log('Upload event:', e);
            if (Array.isArray(e)) {
                return e;
            }
            return e && e.fileList;
        };

        return (
            <Fragment>
                <Form
                form={form}
                layout="vertical"
                >
                <Form.Item label="About" required tooltip="Tell Us About your Business">
                    <TextArea rows={8} />
                    </Form.Item>
                    <Form.Item label="Upload Logo">
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                </Form>
                <Button onClick={() => nextStep()} style={{marginTop: 20, float: 'right'}} type="primary" icon={<RightCircleOutlined />} size='large'>
                    To Step 3
                </Button>
                <Button onClick={() => previousStep()} style={{marginTop: 20, marginRight: 20, float: 'right'}} type="primary" icon={<LeftOutlined />} size='large'>
                Back
                </Button>
            </Fragment>
        )
    }

    const Step3 = ({ nextStep, previousStep }) => {

       const onFinish = values => {
            console.log('Received values of form:', values);
        };

        const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
        },
        };
        const formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 20, offset: 4 },
        },
        };

        return (
            <Fragment>
                <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
                <Form.List
                    name="names"
                    rules={[
                    {
                        validator: async (_, names) => {
                        if (!names || names.length < 2) {
                            return Promise.reject(new Error('At least 2 Catalogs'));
                        }
                        },
                    },
                    ]}
                >
                    {(fields, { add, remove }, { errors }) => {
                    return (
                        <div>
                        {fields.map((field, index) => (
                            <Form.Item
                            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                            label={index === 0 ? 'Catalogs' : ''}
                            required={false}
                            key={field.key}
                            >
                            <Form.Item
                                {...field}
                                validateTrigger={['onChange', 'onBlur']}
                                rules={[
                                {
                                    required: true,
                                    whitespace: true,
                                    message: "Please input Catalog's name or delete this field.",
                                },
                                ]}
                                noStyle
                            >
                                <Input size='large' placeholder="Catalog name" style={{ width: '60%' }} />
                            </Form.Item>
                            {fields.length > 1 ? (
                                <MinusCircleOutlined
                                className="dynamic-delete-button"
                                style={{ margin: '0 8px' }}
                                onClick={() => {
                                    remove(field.name);
                                }}
                                />
                            ) : null}
                            </Form.Item>
                        ))}
                        <Form.Item>
                            <Button
                            type="dashed"
                            onClick={() => {
                                add();
                            }}
                            style={{ width: '60%' }}
                            >
                            <PlusOutlined /> Add Catalog field
                            </Button>
                            <Button
                            type="dashed"
                            onClick={() => {
                                add('The head item', 0);
                            }}
                            style={{ width: '60%', marginTop: '20px' }}
                            >
                            <PlusOutlined /> Add Catalog field at head
                            </Button>

                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                        </div>
                    );
                    }}
                </Form.List>
                </Form>
                <Button onClick={() => nextStep()} style={{marginTop: 20, float: 'right'}} type="primary" icon={<RightCircleOutlined />} size='large'>
                    Finally, To Step 4
                </Button>
                <Button onClick={() => previousStep()} style={{marginTop: 20, marginRight: 20, float: 'right'}} type="primary" icon={<LeftOutlined />} size='large'>
                Back
                </Button>
            </Fragment>
        )
    }

    const Step4 = ({ nextStep, previousStep }) => {
        return (
            <Fragment>
                 <Form
                form={form}
                layout="vertical"
                >
                <Form.Item label="Contact Number" required tooltip="This is a required field">
                    <Input placeholder="Contact Number" size='large' />
                    </Form.Item>
                    <Form.Item label="Email" required tooltip="This is a required field">
                    <Input placeholder="Email" size='large' />
                </Form.Item>
                </Form>
                <Button onClick={() => nextStep()} style={{marginTop: 20, float: 'right'}} type="primary" icon={<RightCircleOutlined />} size='large'>
                    Finish
                </Button>
                <Button onClick={() => previousStep()} style={{marginTop: 20, marginRight: 20, float: 'right'}} type="primary" icon={<LeftOutlined />} size='large'>
                Back
                </Button>
            </Fragment>
        )
    }

    return (
        <Row style={{marginTop: 200}}>
            <Col xs={{span: 20, offset: 2}} sm={{span: 16, offset: 4}} md={{span: 12, offset: 6}} lg={{span: 8, offset: 8}} xl={{span: 7, offset: 8}}>
                <StepWizard>
                    <Step1 />
                    <Step2 />
                    <Step3 />
                    <Step4 />
                </StepWizard>
            </Col>
        </Row>
    )
}

export default Create
