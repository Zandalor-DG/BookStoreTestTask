import React, { useState } from 'react';
import Portal from '../portal/portal';
import PropTypes, { node } from 'prop-types';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import './Modal.css';

interface PropsModal {
    title: string;
    isOpen: boolean;
    onCancel: PropTypes.Requireable<(...args: any[]) => any>;
    onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
}

const Modal: React.FunctionComponent<PropsModal> = ({ title, isOpen, onCancel, onSubmit, children }: PropsModal) => {
    return (
        <>
            {isOpen && (
                <Portal>
                    <div className="modalOverlay">
                        <div className="modalWindow">
                            <div className="modalHeader">
                                <div className="modalTitle">{title}</div>
                                <Icon name="times" onClick={onCancel} />
                            </div>
                            <div className="modalBody">{children}</div>
                            <div className="modalFooter">
                                <Button onClick={onCancel} invert>
                                    Cancel
                                </Button>
                                <Button onClick={onSubmit}>Submit</Button>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};
export default Modal;
