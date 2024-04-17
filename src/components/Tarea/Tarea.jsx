import style from "./Tarea.module.css";

const Tarea = ({descripcion, estado, completarTarea, eliminarTarea}) => {
    return (
        <div className={style.tarea}>
            <div className={style.columna}>
                <p>{descripcion}</p>
            </div>
            <div className={style.columna}>
                <p>{estado}</p>
            </div>
            <div className={style.columna}>
                <p>{completarTarea}</p>
            </div>
            <div className={style.columna}>
                <p>{eliminarTarea}</p>
            </div>
        </div>
    );
};

export default Tarea;