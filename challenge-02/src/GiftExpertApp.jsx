import { useState } from 'react';
import useCounter from './components/UseCounter';
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Zodiac'])

    const onAddCategory = ( category ) => {
        setCategories( list => [...list, category])
    }

    const { count, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>GifExpert</h1>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <AddCategory onAddCategory = {onAddCategory} />
                {
                    categories.map(
                        (category, key) =>
                            {
                                return <GifGrid category = { category } key = {key} />
                            }
                    )
                }
        </>
    );
}

export default GiftExpertApp;