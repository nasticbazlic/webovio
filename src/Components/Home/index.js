import Button from '../common/Button';
import Header from '../Header';

import Image1 from '../../Assets/icons/16_Andrew-Porter-Logo.svg';
import Image2 from '../../Assets/icons/17_Jalen-Rose-Leadership-Academy-Logo.svg';
import Image3 from '../../Assets/icons/Wal.svg';
import Image4 from '../../Assets/icons/Ideal.svg';
import Image5 from '../../Assets/icons/PhalenLeadership.svg';

import Foto1 from '../../Assets/icons/Oval (1).svg';
import Foto2 from '../../Assets/icons/Oval.svg';
import Foto3 from '../../Assets/icons/Oval (2).svg';
import Foto4 from '../../Assets/icons/Oval (3).svg';

import Balenciaga from '../../Assets/images/Bitmap (1).png';
import Model from '../../Assets/images/Bitmap (2).png';
import Booking from '../../Assets/images/Bitmap (3).png';

import './Home.scss';
import Client from '../common/Client';
import Description from '../common/description';
import Coment from '../common/coment';

const Home = () => {
  const brends = [
    {img: <img src={Image1} alt='Image1' />},
    {img: <img src={Image2} alt='Image2' />},
    {img: <img src={Image3} alt='Image3' />},
    {img: <img src={Image4} alt='Image4' />},
    {img: <img src={Image5} alt='Image5' />}
  ]
  const ev = [
    {title: <div>Product <br /> Design Sprint</div>, info: 'A five-day workshop that will help you answer crucial business questions'},
    {title: <div>Scoping <br /> Session</div>, info: 'A workshop aimed at shaping your business idea, answering questions regarding project planning'},
    {title: <div>UX <br /> Review</div>, info: 'An evaluation which will help you radically improve your product.'},
    {title: <div>Code <br /> Review</div>, info: 'Do you know what one of the key secrets of success is what makes people successful in business'}
  ]
  return (
  <div className='home'>
    <section className='home__header'>
      <Header />
      <div className='home__header_info'>
        <div className='home__header_info_pretitle'>
          A place where 
        </div>
        <div className='home__header_info_title'>
          A creative agency for redemptive brands
        </div>
        <div className='home__header_info_subtitle'>
          Anteelo is a leading strategic design firm that builds powerful digital solutions for startups and enterprises.
        </div>
        <Button variation='button__appearance mt45'>
          Get in touch
        </Button>
      </div>
      <div className='home__header_brends'>
        {brends.map(({img}, index) => {
          return (
            <div key={index} className='home__header_brends_item'>
              {img}
            </div>
          )
        })}
      </div>
    </section>
    <section className='home__strategy'>
      <div className='home__strategy_info'>
        <div className='home__strategy_info_pretitle'>
          What we do for you
        </div>
        <div className='home__strategy_info_title'>
          Strategy. Design  Content. <span>Technology</span> Development 
        </div>
        <div className='home__strategy_info_subtitle'>
          There’s no secret sauce, no wizard behind the curtain. 
          What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.
        </div>
        <Button variation='button__appearance mt45'>
          Get in touch
        </Button>
      </div>
      <div className='home__strategy_coment'>
        <div className='home__strategy_coment_text'>
          With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps,
          We Build Brands and Help Them Succeed
        </div>
        <Client variation ='client grand'
                img = {<img src={Foto1} />}
                name = 'Genevieve Rodriquez'
                job ='Founder & CEO, Webovio' />
      </div>
    </section>
    <section className='home__project'>
      <hr />
      <div className='home__project_info'>
        <div className='home__project_info_title'>
          We Have Some Awesomr Project.
        </div>
        <div className='home__project_info_subtitle'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </div>
      </div>
    </section>
    <div className='home__product'>
      <div className='home__product_item'>
        <div className='home__product_item_img'>
          <img src={Balenciaga} alt = 'Balenciaga' />
          <Coment variation='coment first'
                  coment='“In my history of working with trade show vendors, I can honestly say that there is not one company that I`ve ever worked with that has better service than Exhibit Systems.”'
                  name='Angel Armstrong'
                  jobs='Founder & CEO, Google'
                  img={<img src={Foto2} alt='Foto2'></img>}
          />
        </div>
        <Description  variation='description right'
                      title ='The wall new Balenciaga.com'
                      p1 = 'This article is floated online with an aim to help you find the best dvd printing solution'
                      p2 = 'Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs.' />
      </div>
      <div className='home__product_item'>
        <Description  variation='description left'
                      title ='Is this the future of 3D model?'
                      p1 = 'While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space.'
                      p2 = 'It is those feelings that drive our love of astronomy and our desire to learn more and more about it. ' />
        <div className='home__product_item_img'>
          <img src={Model} alt = 'Model' />
          <Coment variation='coment second'
                  coment='“I know they are going to be honest with me. I am not going to get a subpar product; I know it is going to be good. That is the number one advantage of working with Exhibit Systems.'
                  name='Lina Hart'
                  jobs='Founder & CEO, Jico'
                  img={<img src={Foto3} alt='Foto3'></img>}
          />
        </div>
      </div>
      <div className='home__product_item'>
        <div className='home__product_item_img'>
          <img src={Booking} alt = 'Booking' />
          <Coment variation='coment first'
                  coment='“Exhibit Systems is not a provider. They are not a supplier. They are a partner with expertise in making trade shows effective.”'
                  name='Eunice Oliver'
                  jobs='Founder & CEO, Google'
                  img={<img src={Foto4} alt='Foto4'></img>}
          />
        </div>
        <Description  variation='description right'
                      title =' Is this the future of Online Booking'
                      p1 = 'You should be able to find several indispensable facts about motivation in the following paragraphs'
                      p2 = ' If there’s at least one fact you didn’t know before, imagine the difference it might make.' />
      </div>
    </div>
    <section className='home__evaluation'>
      <hr />
      <div className='home__evaluation_title'>
        Deation & Evaluation - Best Way to Kick off Your Product Idea
      </div>
      <div className='home__evaluation_list'>
        {ev.map(({title, info}, index) => {
          return (
            <div key={index} className='home__evaluation_list_item'>
              <div className='home__evaluation_list_item_title'>
                {title}
              </div>
              <div className='home__evaluation_list_item_info'>
                {info}
              </div>
              <Button variation='button__appearance mt56'>
                Read More
              </Button>
            </div>
          )
        })}
      </div>
      <div className='home__evaluation_call'>
        <div>
          <div className='home__evaluation_call_title'>
            Let’s make something <br /> amazing together.
          </div>
          <Button variation='button__appearance mt45'>
            LET'S GET STARTED
          </Button>
        </div>
      </div>
    </section>
  </div>
  )
}
export default Home;
