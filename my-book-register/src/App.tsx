import { ChangeEventHandler, useState } from 'react';
import './App.css';
import FilterableBookTable from './components/filterableBookTable';
import { BookItemModel } from './models';
import LabelInput from './components/LabelInput';
import RegistrationButton from './components/RegistrationButton';

function App() {
  const [isbn, setIsbn] = useState('');
  const [books, setBooks] = useState<BookItemModel[]>([]);

  const handleClickButton = (): void => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.totalItems === 0) {
          alert('登録されていない ISBN コードです。');
          return;
        }
        onPostCompleted({
          name: data.items[0].volumeInfo.title,
          isOnLoan: false,
        });
      });
  };

  const onPostCompleted = (postedItem: Omit<BookItemModel, 'id'>): void => {
    setBooks((prev) => [
      ...prev,
      {
        id: prev.length.toString(),
        ...postedItem,
      },
    ]);
  }
  
  const handleChangeIsbn: ChangeEventHandler<HTMLInputElement> = (e) =>
      setIsbn(e.target.value);

  const handleClickDelete = (id:string) => {
    setBooks((prev) => prev.filter(val => val.id != id))
  }

  const handleClickLendingSwitch = (id:string) => {
    setBooks((prev) => prev.map(val => {
      if(val.id === id){
        const newVal = {...val} ;
        newVal.isOnLoan = !newVal.isOnLoan;
        return newVal;
      }else{
        return val
      }
    }))
  }

  return (
    <div className="App">
      {/* 第1問：コンポーネントに分割 ↓ ↓ ↓ ↓ ↓ */}
      <div className="book-register">
        <LabelInput onChangeInput = {handleChangeIsbn} inputValue = {isbn} labelMessage ={"ISBNコード"}/>
        <RegistrationButton onClickButton={handleClickButton}/>
      </div>
      {/* 第1問：コンポーネントに分割 ↑ ↑ ↑ ↑ ↑ ↑ */}
      <hr />
      <FilterableBookTable
        books={books}
        onClickDelete={(id) => handleClickDelete(id)}
        onClickLendingSwitch={(id) => handleClickLendingSwitch(id)}
      />
    </div>
  );
}

export default App;
