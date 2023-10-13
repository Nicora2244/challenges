import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (evt) => {
        setInputValue(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(inputValue)
        onAddCategory( inputValue );
        setInputValue('')
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Enter Category"
                value={ inputValue }
                onChange={(event) => onInputChange(event)}
                
            />
            <button>Add Category</button>
        </form>
    
    )
}