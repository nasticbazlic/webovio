
import './list.scss';

const List = ({list, title}) => {
  return (
    <ul className='list'>
      {title}
      {list.map(({value}, index) => {
        return (
          <li key={index}>{value}</li>
        )
      })}
    </ul>
  )
}

export default List;