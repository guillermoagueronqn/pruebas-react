import style from "./Input.module.css";

const Input = ({value, onChangeHandler, placeholder}) => {
    return (
        <input type="text" value={value} onChange={onChangeHandler} placeholder={placeholder} className={style.input} />
    );
};

export default Input;