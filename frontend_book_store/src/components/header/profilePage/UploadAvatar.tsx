import React, { useState } from 'react';
import { Card, Form, Button, Figure } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { postUploadAvatar } from '../../../api/apiUser';
import { StateReduxType } from '../../../store/reducers';
import css from './ProfilePage.module.css';

const UploadAvatar: React.FC = () => {
    const [isFormEmpty, setForm] = useState(true);
    const { iconUrl, user } = useSelector((state: StateReduxType) => ({
        iconUrl: state.userState.avatar,
        user: state.userState.user,
    }));
    const [userAvatar, setUserAvatar] = useState<string>('');
    const formData = new FormData();

    const submitUserImg = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        if (user === null) {
            return;
        }
        formData.append('filedata', userAvatar);
        postUploadAvatar(formData, user);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            const currentAvatar = e.currentTarget.files[0];
            setUserAvatar('currentAvatar');
        }
        if (userAvatar) {
            setForm(false);
        } else {
            setForm(true);
        }
    };

    return (
        <div className={css.profilePage__photo}>
            <Card style={{ maxWidth: '15rem', margin: 'auto', textAlign: 'center' }}>
                <Figure className="text-center mt-3">
                    <Figure.Image
                        width={200}
                        height={200}
                        alt="171x180"
                        src={iconUrl}
                        // roundedCircle
                    />
                </Figure>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.File
                                onChange={handleChange}
                                id="exampleFormControlFile1"
                                name="filedata"
                                // label="Example file input"
                            />
                            <Button
                                style={{ marginTop: '10px' }}
                                variant="outline-primary"
                                className="mt-2"
                                as="input"
                                onClick={submitUserImg}
                                type="submit"
                                value="Load"
                                size="sm"
                                disabled={isFormEmpty}
                            />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UploadAvatar;
