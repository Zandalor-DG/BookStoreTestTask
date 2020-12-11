import React, { useEffect } from 'react';
import ReactDom from 'react-dom';

const Portal: React.FC = (props) => {
    const element = document.createElement('div');
    //const elemRef = React.useRef<HTMLDivElement>();
    useEffect(() => {
        //elemRef.current = element;
        document.body.appendChild(element);
        return () => {
            document.body.removeChild(element);
        };
    }, []);
    //if (!elemRef.current) return null;
    return ReactDom.createPortal(props.children, element);
};

export default Portal;
