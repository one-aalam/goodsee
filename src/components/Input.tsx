import React, { useState, useRef } from 'react'

export const Input = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [ value, setValue ] = useState("");

    // if (ref && ref.current) {
        console.log("ref", ref?.current?.value);
    // }

    return (
        <div>
            <input ref={ref} value={value} onChange={e => setValue(e.target.value)} />
        </div>
    )
}
