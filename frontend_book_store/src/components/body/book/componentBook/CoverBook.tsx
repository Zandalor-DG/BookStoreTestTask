import React from 'react';
import 'antd/dist/antd.css';
import { Image } from 'antd';

interface propsCoverBook {
    cover: string | undefined;
}

const CoverBook: React.FC<propsCoverBook> = ({ cover }: propsCoverBook) => {
    return <Image width={200} height={251} src={cover || 'http://localhost:3000/download.png'} />;
};

export default CoverBook;
