import React, { useState } from 'react';
import { Card, Form, Button, Figure } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { putUploadAvatar } from '../../../api/apiUser';
import { StateReduxType } from '../../../store/reducers';
import css from './ProfilePage.module.css';

const UploadAvatar: React.FC = () => {
    const { iconUrl, user } = useSelector((state: StateReduxType) => ({
        iconUrl: state.userState.avatar,
        user: state.userState.user,
    }));
    const [userAvatar, setUserAvatar] = useState<string | Blob>('');
    const submitUserImg = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const formData = new FormData();
        e.preventDefault();
        if (user === null) {
            return;
        }
        formData.append('filedata', userAvatar);
        console.log(formData.getAll('filedata'));

        putUploadAvatar(formData, user);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            const currentAvatar = e.currentTarget.files[0];
            setUserAvatar(currentAvatar);
        }
    };

    return (
        <div className={css.profilePage__photo}>
            <Card style={{ maxWidth: '15rem', margin: 'auto', textAlign: 'center' }}>
                <Figure className="text-center mt-3">
                    <Figure.Image width={200} height={200} alt="171x180" src={iconUrl} />
                </Figure>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.File onChange={handleChange} />
                            <Button
                                style={{ marginTop: '10px' }}
                                variant="outline-primary"
                                className="mt-2"
                                as="input"
                                onClick={submitUserImg}
                                type="submit"
                                value="Load"
                                size="sm"
                                disabled={!userAvatar}
                            />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UploadAvatar;
