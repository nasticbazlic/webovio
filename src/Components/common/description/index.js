import Button from '../Button';
import './description.scss';

const Description = ({variation, title, p1, p2}) => {
  return (
    <div className={variation}>
      <div className='description__title'>
        {title}
      </div>
      <div className='description__text'>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
      <Button variation='button__appearance mt90'>
        See Case Study
      </Button>
    </div>
  )
}

export default Description;