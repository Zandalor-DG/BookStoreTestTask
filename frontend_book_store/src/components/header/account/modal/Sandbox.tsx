import React from 'react';
import Modal from './Modal';
import { UserAddOutlined } from '@ant-design/icons';
import css from '../../../header/navBar/NavBar.module.css';
import { useDispatch } from 'react-redux';
import { setIsOpenModal } from '../../../../store/userStore/actionCreatedUser';

interface PropsSandbox {
    title: string;
}

type Props = React.PropsWithChildren<PropsSandbox>;

const Sandbox: React.FC<Props> = ({ title, children }: Props) => {
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(setIsOpenModal(true));
    };

    const handleCancel = () => {
        dispatch(setIsOpenModal(false));
    };

    return (
        <>
            <UserAddOutlined className={css.navLink} onClick={openModal} style={{ fontSize: '30px' }} />
            <Modal title={title} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    );
};

export default Sandbox;
