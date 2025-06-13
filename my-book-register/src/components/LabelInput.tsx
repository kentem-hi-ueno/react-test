import React, { ChangeEventHandler } from 'react'

type LabelProps = {
  onChangeInput: ChangeEventHandler<HTMLInputElement>;
  inputValue : string;
  labelMessage : string;
}

const LabelInput:React.FC<LabelProps> = ({onChangeInput,inputValue,labelMessage}) => {
  return (
        <div className="label-input">
          <label className="label">
            {labelMessage}
          </label>
          <input className="input" placeholder="入力してください" value={inputValue} onChange={(e) => onChangeInput(e)}></input>
        </div>
  )
}

export default LabelInput