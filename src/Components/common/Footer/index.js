
import List from '../list';

import LogoF from '../../../Assets/icons/Logo (1).svg';
import './Footer.scss';

const Footer = () => {
  const contact =[
    {title: 'Phone', info: '+32 50 31 28 32'},
    {title: 'Address', info: '491 Merlin Crest Suite 963'}
  ]

  const list1 = [
    {value: 'Strategy Design'},
    {value: 'Product Design'},
    {value: 'Content Strategy'},
    {value: 'Brand Strategy'},
    {value: 'Development '}
  ];

  const list2 = [
    {value: 'How it works'},
    {value: 'Contact Support'},
    {value: 'Privacy Policy'},
    {value: 'FAQ'}
  ];

  const list3 = [
    {value: 'About'},
    {value: 'Blog'},
    {value: 'Contact'},
    {value: 'Jobs'}
  ];

  return (
    <div className='footer'>
      <section className='footer__content'>
        <div className='footer__content_contact'>
          {contact.map(({title, info}, index) => {
            return (
              <div key={index} className='footer__content_contact_item'>
                {title}
                <span>{info}</span>
              </div>
            )
          })}
        </div>
        <hr />
        <div className='footer__content_center'>
          <div className='footer__content_center_list'>
            <List title='Services' list={list1} />
            <List title='Help And Advice' list={list2} />
            <List title='Company' list={list3} />
            <div className='footer__content_center_list_item'>
              <div className='footer__content_center_list_item_title'>
                Get in Touch
              </div>
              <p>Feel free to get in touch with us <br /> vai email</p>
              <span>info.webovio@gmail.com</span>
              <div className='footer__content_center_list_item_icons'>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-google-plus-g"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='footer__content_bottom'>
          <img src={LogoF} alt='Logof' />
          <div>© 2020@webovio. All Rights Reserved.</div>
        </div>
      </section>
    </div>
  )
}

export default Footer;



