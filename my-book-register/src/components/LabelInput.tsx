import React from 'react'

type LabelProps = {
  onIsbn : (isbnCode:string) => void;
  isbn : string;
}

const LabelInput:React.FC<LabelProps> = ({onIsbn,isbn}) => {
  return (
        <div className="label-input">
          <label className="label">
            ISBNコード
          </label>
          <input className="input" placeholder="入力してください" value={isbn} onChange={(e) => onIsbn(e.target.value)}></input>
        </div>
  )
}

export default LabelInput