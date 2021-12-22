import React, { useEffect, useRef } from 'react'

import inputStyles from '../../../styles/generic-components/forms-and-inputs/ControlledInput.module.scss'

interface Props {
    className: string,
    name: string,
    placeholder: string,
    required: boolean,
    value: string,
    focus?: boolean
    onChange: React.ChangeEventHandler
}

const ControlledTextArea = (
    { className, name, placeholder, required, value, focus, onChange }: Props) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (focus && textAreaRef.current) {
            textAreaRef.current.focus()
        }
    }, [focus])

    const moveCursorToEnd = (event: React.FocusEvent) => {
        const currentTarget = event.currentTarget as HTMLTextAreaElement
        const endOfText = currentTarget.value.length
        currentTarget.setSelectionRange(endOfText, endOfText)
    }

    return (
        <label className={inputStyles.label}>
            <textarea
                className={className}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                ref={textAreaRef}
                onChange={onChange}
                onFocus={moveCursorToEnd}
            />
        </label>
    )
}

ControlledTextArea.defaultProps = {
    shouldResetTextArea: false
}

export default ControlledTextArea