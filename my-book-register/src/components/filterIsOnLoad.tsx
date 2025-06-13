
type filterIsOnLoadProps = {
  isOnLoan: boolean;
  onChangeChecked: () => void;
}

const FilterIsOnLoad = ({isOnLoan,onChangeChecked}:filterIsOnLoadProps) => {
  return (
        <label>
          <input type="checkbox" checked={isOnLoan} onChange={onChangeChecked} />
          利用可能
        </label>
  )
}

export default FilterIsOnLoad