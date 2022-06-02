import { useState } from 'react'

export default function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)

    function toggleValue(value) {
        setValue((currentValue) =>
            typeof value === 'boolean' ? value : !currentValue
        )
    }

    return [value, toggleValue]
}
