import style from "./ButtonAccion.module.css";

const ButtonAccion = ({text, onClick}) => {
    return (
        <button onClick={onClick} className={style.button}>
            {text}
        </button>
    );
};

export default ButtonAccion;