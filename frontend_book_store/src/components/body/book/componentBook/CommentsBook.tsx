import React from 'react';
import 'antd/dist/antd.css';
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';

interface PropsCommentsBook {
    comments:
        | [
              {
                  bookId: number;
                  userId: number;
                  comment: string;
                  createdAt: Date;
                  updateAt: Date;
                  CommentUser: {
                      email: string;
                      File: {
                          path_name: string;
                      };
                  };
              },
          ]
        | undefined;
}

const CommentsBook: React.FC<PropsCommentsBook> = ({ comments }: PropsCommentsBook) => {
    const userComments = [
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            email: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design resources
                    (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            email: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design resources
                    (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
    ];

    return (
        <List
            className="comment-list"
            header={`${userComments.length} replies`}
            itemLayout="horizontal"
            dataSource={userComments}
            renderItem={(a) => (
                <li>
                    <Comment
                        actions={a.actions}
                        author={a.email}
                        avatar={a.avatar}
                        content={a.content}
                        datetime={a.datetime}
                    />
                </li>
            )}
        />
    );
};

export default CommentsBook;
