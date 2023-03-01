import Arrow from '../../../Assets/icons/arrow.svg';
import './Button.scss';

const Button = ({children, variation}) => {
  return (
		<div className={variation}>
			<img src={Arrow} alt='arrow'></img>
			{children}
		</div>
	)
}

export default Button;