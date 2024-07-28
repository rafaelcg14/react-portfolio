import { useState } from 'react';

import styles from './Filter.module.css';

export const Filter = ( { onFilterChange } ) => {

    const btnFilter = ["3D", "2D"];

    const [ activeCategory, setActiveCategory ] = useState('3D');

    const handleFilterClick = ( category ) => {
        setActiveCategory(category);
        onFilterChange(category);
    };

    return (
        <div className={styles.btnContainer}>
            {
                btnFilter.map( (category, id) => {
                    return (
                        <button
                            key={id}
                            onClick={ () => handleFilterClick(category) }
                            className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
                        >
                            { category }
                        </button>
                    ) 
                } )
            }
        </div>
    )
}
