import { useState } from 'react'

const useControlledInput = (initialText = '') => {
    const [ text, updateText ] = useState('')

    interface InputText {
        target: {
            value: string
        }
    }
    const setText = ({ target: { value } }: InputText) => updateText(value)
    const clearText = () => updateText('')

    interface KeyPressed {
        key: string
    }
    const submitKey = 'Enter'
    const submitOnEnter = ({ key }: KeyPressed) => {
        if (key === submitKey) {
            clearText()
        }
    }

    return { text, setText, clearText, submitOnEnter }
}

export default useControlledInput