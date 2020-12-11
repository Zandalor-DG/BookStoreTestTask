import React from 'react';
import Portal from '../portal/Portal';
import { Button, Radio } from 'antd';
import './Modal.css';
import { CloseCircleFilled } from '@ant-design/icons';

interface PropsModal {
    title: string;
    isOpen: boolean;
    onCancel: () => void;
    onSubmit: () => void;
}
type Props = React.PropsWithChildren<PropsModal>;

const Modal: React.FC<Props> = ({ isOpen, onCancel, onSubmit, title, children }: Props) => {
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
                            <div className="modalFooter">
                                <Button onClick={onCancel} type="primary" danger>
                                    Primary
                                </Button>
                                <Radio.Button onClick={onSubmit} value="submit">
                                    Submit
                                </Radio.Button>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};
export default Modal;
