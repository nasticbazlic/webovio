
import './coment.scss';

const Coment = ({variation, coment, img, name, jobs}) => {
  return (
		<div className={variation}>
			<div className='coment__text'>
				{coment}
			</div>
			<div className='coment__author'>
				<div className='coment__author_img'>
					{img}
				</div>
				<div className='coment__author_info'>
					<span>{name}</span>
					{jobs}
				</div>
			</div>
		</div>
	)
}

export default Coment;