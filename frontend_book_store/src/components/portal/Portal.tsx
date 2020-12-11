import React, { useEffect } from 'react';
import ReactDom from 'react-dom';

interface PropsPortal {
    children: Element[];
}

const Portal: React.FunctionComponent<PropsPortal> = ({ children }: PropsPortal) => {
    const element = document.createElement('div');
    useEffect(() => {
        document.body.appendChild(element);
        return () => {
            document.body.removeChild(element);
        };
    }, [element]);

    return ReactDom.createPortal(children, element);
};

export default Portal;
