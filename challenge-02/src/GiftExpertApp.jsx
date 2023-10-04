import { useState } from 'react';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['first category']);
    const [category, setCategory] = useState('');

    const onAddCategory = () => {
            setCategories(list => [...list, category]);
            setCategory('');
    };

    const onSetCategory = (evt) => {
        setCategory(evt.target.value);
    };

    return (
        <>
            <h1>GifExpert</h1>
            <input 
                type="text" 
                value={category} 
                onChange={(event) => onSetCategory(event)} 
                placeholder='Enter Category'
            />
            <button onClick={onAddCategory}>Add Category</button>
            <ol>
                {
                    categories.map((cat, key) => (
                        <li key={key}>{cat}</li>
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;