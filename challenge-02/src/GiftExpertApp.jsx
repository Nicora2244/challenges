import { useState } from 'react';
import useCounter from './components/UseCounter';


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

    const { count, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>GifExpert</h1>
            <h1>Counter: {count}</h1>
            <input 
                type="text" 
                value={category} 
                onChange={(event) => onSetCategory(event)} 
                placeholder='Enter Category'
            />
            <button onClick={onAddCategory}>Add Category</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
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