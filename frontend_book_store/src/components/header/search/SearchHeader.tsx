import React from 'react';
import { useForm } from 'react-hook-form';
import css from './searchHeader.module.css';

interface InputsSearch {
    searchText: string;
}

const SearchHeader: React.FunctionComponent = () => {
    const { register, handleSubmit, watch } = useForm<InputsSearch>();
    const onSubmit = (data: InputsSearch) => console.log(data);
    console.log(watch('loginUser'));
    return (
        <form className={css.bookstore__search} onSubmit={handleSubmit(onSubmit)}>
            <input
                className={css.bookstore__input}
                type="search"
                placeholder="What to read..."
                name="searchText"
                ref={register()}
            />
        </form>
    );
};

export default SearchHeader;
