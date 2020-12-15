import React from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import css from './ProfilePage.module.css';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';

interface File {
    type: string;
    size: number;
}

interface State {
    imageUrl?: string;
    loading: boolean;
}

function getBase64(img: Blob, callback: (reader: string) => void) {
    const reader = new FileReader();
    reader.onloadend = function () {
        callback(reader.result as string);
    };
    // reader.addEventListener('load', () => {
    //     callback(reader.result);
    // });
    reader.readAsDataURL(img);
}

function beforeUpload(file: File) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

class UploadAvatar extends React.Component {
    state: State = {
        loading: false,
    };

    handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }

        if (info.file.status === 'done' && info.file.originFileObj) {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className={css.profilePage__photo}
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        );
    }
}

export default UploadAvatar;
