import React, { useRef } from 'react'


type SpecialButtonProps = {
    val: boolean;
    setVal: (val: boolean) => void;
}

const SpecialButton = ({ val, setVal }: SpecialButtonProps) => {

    return (
        <div>
            <label className="toggle-switch">
                <input type="checkbox" />
                <div className="frame toggle-switch-background" onClick={() => setVal(!val)}>
                    <div className="ball toggle-switch-handle"></div>
                </div>
            </label>
        </div>
    )
}

export default SpecialButton

// style={val ? { left:"2px"} : {right:"2px"} }