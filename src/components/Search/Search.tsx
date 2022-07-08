import React, {FC} from 'react';

import scss from './Search.module.scss';

const Search: FC = () => {
    return (
        <div className={scss.search}>
            <form>
                <input type="text"/>
                <button>Знайти</button>
            </form>
        </div>
    );
};

export {Search};