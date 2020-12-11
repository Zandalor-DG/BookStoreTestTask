import React, { useState } from 'react';
import Modal from './Modal';
import css from '../header/navBar/NavBar.module.css';

interface PropsSandbox {
    title: string;
    icon: string;
}
type Props = React.PropsWithChildren<PropsSandbox>;

const Sandbox: React.FC<Props> = ({ title, children, icon }: Props) => {
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
            <a className={css.navLink} onClick={openModal}>
                <img className={css.imgIcon} src={icon} alt="" />
            </a>
            <Modal title={title} isOpen={isOpen} onCancel={handleCancel} onSubmit={handleSubmit}>
                {children}
            </Modal>
        </>
    );
};

export default Sandbox;
