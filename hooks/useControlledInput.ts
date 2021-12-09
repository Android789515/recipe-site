import { ChangeEventHandler, useState } from 'react'

const useControlledInput = (text = '', updateText: (text: string) => void) => {

    interface InputText {
        target: {
            value: string
        }
    }
    const setText = ({ target: { value } }: InputText) => updateText(value)
    const clearText = () => updateText('')

    return { text, setText, clearText }
}

export default useControlledInput