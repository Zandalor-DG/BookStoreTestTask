import React, { useState } from 'react';
import Modal from './Modal';
import { UserAddOutlined } from '@ant-design/icons';
import css from '../header/navBar/NavBar.module.css';

interface PropsSandbox {
    title: string;
}

type Props = React.PropsWithChildren<PropsSandbox>;

const Sandbox: React.FC<Props> = ({ title, children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const handleSubmit = () => {
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    return (
        <>
            <UserAddOutlined className={css.navLink} onClick={openModal} style={{ fontSize: '30px' }} />
            <Modal title={title} isOpen={isOpen} onCancel={handleCancel} onSubmit={handleSubmit}>
                {children}
            </Modal>
        </>
    );
};

export default Sandbox;
