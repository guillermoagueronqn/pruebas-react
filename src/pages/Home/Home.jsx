import logo from "../../logo.svg"
import Titulo from "../../components/Titulo/Titulo";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useState } from "react";
import Tarea from "../../components/Tarea/Tarea";
import style from "./Home.module.css";
import ButtonAccion from "../../components/ButtonAccion/ButtonAccion";
const Home = () => {
    const [tareasState, setTareasState] = useState([]);
    const [valueInput1, setValueInput1] = useState("");
    const [valueBuscador, setValueBuscador] = useState("");

    // cambia el valor del input para ingresar una tarea al presionar una tecla
    const onChangeHandler = (event) => {
        setValueInput1(event.target.value);
      };

      // funcion que guarda la tarea en el arreglo de tareas y limpia el input para ingresar una tarea
    const guardarTarea = () => {
        const nuevaTarea = {
            id: tareasState.length,
            descripcion: valueInput1,
            estado: "no completada",
        };
        setTareasState([...tareasState, nuevaTarea]);
        setValueInput1("");
    };

    // funcion que setea el estado de una determinada tarea pasada por parametro
    const terminarTarea = (id) => {
        // Se crea un nuevo arreglo de tareas con el estado actualizado
        const nuevasTareas = tareasState.map(tarea => {
            // Si el id es igual al pasado por parametro, se cambia el estado a 'completada'
            if (tarea.id === id) {
                return {...tarea, estado: "completada"};
            // En caso de que no coincidan los id, se completa con la misma tarea sin modificar 
            } else {
                return tarea;
            } 
        });
        // Se actualiza el estado con el nuevo arreglo nuevasTareas
        setTareasState(nuevasTareas);
    }


    // funcion que elimina la tarea del arreglo de tareas con el id pasado por parametro
    const eliminarTarea = (id) => {
        // Se crea un nuevo arreglo de tareas sin el id pasado por parametro, ya que será eliminado
        const nuevasTareas = tareasState.filter(tarea => tarea.id !== id);
        setTareasState(nuevasTareas);
    }

    // funcion que retorna la cantidad de tareas actuales
    const cantTareasTotales = () => {
        return tareasState.length;
    }

    // funcion que retorna la cantidad de tareas con el estado 'completado'
    const cantTareasCompletadas = () => {
        // Filtrar las tareas con el estado "completado" y luego son contadas para retornar esa cantidad
        const tareasCompletadas = tareasState.filter(tarea => tarea.estado === "completada");
        return tareasCompletadas.length;
    }

    // funcion que setea el value del input del buscador según la tecla presionada
    const onChangeHandler2 = (event) => {
        setValueBuscador(event.target.value);
      };
    
    // funcion que busca las tareas segun lo ingresado en el input del buscador
    const buscaTareas = () => {
        let arreglo = [];
        for(let i=0; i < tareasState.length; i++){
            if (tareasState[i].descripcion.toLowerCase().includes(valueBuscador.toLowerCase())){
                arreglo.push(tareasState[i]);
            }
        }
        return arreglo;
    }

    if (cantTareasTotales() > 0){ // en caso de que haya al menos una tarea en el arreglo, se muestra el siguiente bloque de codigo
        return (
            <section className={style.section}>
                <Titulo text={"To-Do List"}/>
                <div className={style.div1}>
                    <span className={style.span}>Tareas totales: {cantTareasTotales()}</span>
                    <span className={style.span}>Tareas completadas: {cantTareasCompletadas()}</span>
                </div>
                <div className={style.div}>
                    <Input value={valueInput1} placeholder={"Ingrese la tarea"} onChangeHandler={onChangeHandler}/>
                    <Button text={"Agregar"} onClick={guardarTarea}/>
                </div>
                <div className={style.div}>
                    <Input value={valueBuscador} placeholder={"Buscar tarea"} onChangeHandler={onChangeHandler2}/>
                </div>
                <div className={style.div}>
                {
                buscaTareas().map((tarea) => {
                    return <Tarea 
                    key={tarea.id} 
                    descripcion={tarea.descripcion} 
                    estado={tarea.estado} 
                    completarTarea={<ButtonAccion text={"completar"} onClick={() => terminarTarea(tarea.id)} />}
                    eliminarTarea={<ButtonAccion text={"eliminar"} onClick={() => eliminarTarea(tarea.id)}/>}/>
                })}
                </div>    
            </section>
        );
    } else { // si no hay tareas en el arreglo de tareas, se renderiza el siguiente codigo
        return (
            <section className={style.section}>
                <Titulo text={"To-Do List"}/>
                <div className={style.div}>
                    <Input value={valueInput1} placeholder={"Ingrese la tarea"} onChangeHandler={onChangeHandler}/>
                    <Button text={"Agregar"} onClick={guardarTarea}/>
                </div>
                <h2>¡Has completado todas tus tareas, puedes descansar!</h2>
            </section>
            
        );
    }
}

export default Home;