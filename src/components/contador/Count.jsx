import React from 'react';
import style from './Count.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, resetear } from '../../redux/actions';

const Count = () => {
  const dispatch = useDispatch();
  const contador = useSelector((state) => state);

  const incrementar = () => {
    dispatch(increment());
  };

  const decrementar = () => {
    if (contador.stateCount > 0) {
      dispatch(decrement());
    }
  };

  const reset = () => {
    dispatch(resetear());
  };

  return (
    <div className={style.containerButton}>
      <button onClick={() => incrementar()}>Incremento</button>
      <h1>{contador.stateCount}</h1>
      <button
        onClick={() => {
          decrementar();
        }}
      >
        Decremento
      </button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};
export default Count;
