import React, {FC} from 'react';

import scss from './Search.module.scss';

const Search: FC = () => {
    return (
        <div className={scss.search}>
            <form>
                <input type="text" placeholder={'Пошук фільму, серіалу, людини...'}/>
                <input type="submit" value={'Знайти'}/>
            </form>
        </div>
    );
};

export {Search};