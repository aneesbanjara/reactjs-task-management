import ButtonClasses from './Button.module.css';

const Button = props => {
  return (
    <button className={ButtonClasses.button} type={props.type || 'buttton'} onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;