
import './Client.scss';

const Client = ({variation, img, name, job}) => {
  return (
		<div className={variation}>
			<div className='client__img'>
				{img}
			</div>
			<div className='client__info'>
				<span>{name}</span>
				{job}
			</div>
		</div>
	)
}

export default Client;