import "@testing-library/jest-dom";
import { expect, test} from "vitest";
import { render } from "@testing-library/react";
import BookRow from "../components/bookRow";

const book = {
  id: "001",
  name: "TestBooks",
  isOnLoan: true,
}

const handleClickDelete = () => {}
const handleClickLendingSwitch = () => {}

test("BookRowテスト", () => {
  render(<BookRow
          bookItem={book}
          onClickDelete={handleClickDelete}
          onClickLendingSwitch={handleClickLendingSwitch}
          key={book.id}
        />);
  expect().toBe(3);
});