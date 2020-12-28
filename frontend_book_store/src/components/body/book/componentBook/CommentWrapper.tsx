import React, { useEffect, useRef } from 'react';

export interface ICommentWrapper {
    id: number | undefined;
    replyId: number | null;
    setIdToReply: (id: number | null) => void;
}

const CommentWrapper: React.FC<React.PropsWithChildren<ICommentWrapper>> = (
    props: React.PropsWithChildren<ICommentWrapper>,
) => {
    const ref = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        if (props.id === props.replyId) {
            ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
            props.setIdToReply(null);
        }
    }, [props.replyId, props.id]);
    return <p ref={ref}>{props.children}</p>;
};

export default CommentWrapper;
