import style from "./Titulo.module.css";

const Titulo = ({text}) => {
    return (
        <h1 className={style.h1}>
            {text}
        </h1>
    );
};

export default Titulo;