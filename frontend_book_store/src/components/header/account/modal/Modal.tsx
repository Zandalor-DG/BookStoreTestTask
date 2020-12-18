import React from 'react';
import Portal from '../../../common/portal/Portal';
import './Modal.css';
import { CloseCircleFilled } from '@ant-design/icons';
import { StateReduxType } from '../../../../store/reducers';
import { useSelector } from 'react-redux';

interface PropsModal {
    title: string;
    onCancel: () => void;
}
type Props = React.PropsWithChildren<PropsModal>;

const Modal: React.FC<Props> = ({ onCancel, title, children }: Props) => {
    const isOpen = useSelector((state: StateReduxType) => state.userState.isOpenModal);
    return (
        <>
            {isOpen && (
                <Portal>
                    <div className="modalOverlay">
                        <div className="modalWindow">
                            <div className="modalHeader">
                                <div className="modalTitle">{title}</div>
                                <CloseCircleFilled onClick={onCancel} />
                            </div>
                            <div className="modalBody">{children}</div>
                            {/* <div className="modalFooter"></div> */}
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};
export default Modal;
