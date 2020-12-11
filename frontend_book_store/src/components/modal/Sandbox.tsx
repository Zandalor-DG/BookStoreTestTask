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
        console.log('set true');
        setIsOpen(true);
    };

    const handleSubmit = () => {
        console.log('Submit function!');
        setIsOpen(false);
    };

    const handleCancel = () => {
        console.log('Cancel function!');
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
