import s from './Card.module.scss'

const Card = (props) => {
  return (
    <div className={s.Card}>
      <h3>{props.day}</h3>
      <p>{props.date}</p>
      {props.svg}
      <p className={s.CardTempHi}>{props.tempHi}</p>
      <p className={s.CardTempLo}>{props.tempLo}</p>
      <p className={s.CardSum}>{props.sum}</p>
    </div>
  );
};

export default Card;