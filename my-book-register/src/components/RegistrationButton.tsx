type RegistrationButtonProps = {
  onClickButton: () => void;
}
const RegistrationButton = ({onClickButton}:RegistrationButtonProps) => {
  return (
        <button className="button" onClick={onClickButton}>
          書籍登録
        </button>
  )
}

export default RegistrationButton