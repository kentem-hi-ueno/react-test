import { ChangeEventHandler, useState } from 'react';
import { BookItemModel } from '../models';
import BookTable from './bookTable';
import LabelInput from './LabelInput';
import FilterIsOnLoad from './filterIsOnLoad';

interface Props {
  books: BookItemModel[];
  onClickDelete: (id: string) => void;
  onClickLendingSwitch: (id: string) => void;
}

const FilterableBookTable = ({
  books,
  onClickDelete,
  onClickLendingSwitch,
}: Props) => {
  const [filterText, setFilterText] = useState('');
  const [isOnLoan, setIsOnLoan] = useState(true);

  const handleChangeFilterText: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFilterText(e.target.value);

  const handleChangeChecked = () => {
    setIsOnLoan(prev => !prev)
  }

  return (
    <div className="filterable-book-table">
      <div className="filters">
        <LabelInput onChangeInput = {handleChangeFilterText} inputValue = {filterText} labelMessage ={"filter"}/>
        <FilterIsOnLoad isOnLoan={isOnLoan} onChangeChecked={handleChangeChecked}/>
      </div>
      <BookTable
        bookItems={books.filter(
          (x) => isOnLoan ? (!x.isOnLoan &&( !filterText || x.name.includes(filterText))):(!filterText || x.name.includes(filterText)),
        ) }
        onClickDelete={onClickDelete}
        onClickLendingSwitch={onClickLendingSwitch}
      />
    </div>
  );
};
export default FilterableBookTable;
