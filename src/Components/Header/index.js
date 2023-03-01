import Logo from '../../Assets/icons/Logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <section className='header'>
      <div className='header__logo'>
        <img src={Logo} alt='logo'></img>
      </div>
      <div className='header__menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default Header;