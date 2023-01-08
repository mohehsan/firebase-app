import { useState, useCallback } from "react";

/** @type {import("./useForm-definition").useFormFunction} */
const useForm = (initialState) => {
    const [state, setState] = useState(initialState);

    /** @type {import("./useForm-definition").onInputChangeFunction}*/
    const onChangeForm = useCallback((e) => {
        setState((form) => ( { ...form, [e.target.name]: e.target.value } ))
    }, []);

    return [state, onChangeForm]
}

export default useForm;