import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addOrUpdateBookRate } from '../../../../store/bookStore/thunkBookStore';
import { StateReduxType } from '../../../../store/reducers';

interface IRateBook {
    rate: number | undefined;
}

const RateBook: React.FC<IRateBook> = ({ rate }: IRateBook) => {
    const params: {
        id: string;
    } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state: StateReduxType) => state.userState.user);
    const onChange = (value: number) => {
        dispatch(addOrUpdateBookRate({ bookId: params.id, rateBook: value }));
    };

    return <Rate disabled={!user} allowHalf defaultValue={rate} count={5} onChange={onChange} />;
};

export default RateBook;
