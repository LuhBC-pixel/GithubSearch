import Github from '../assets/github-square-brands.svg';
import Linkedin from '../assets/linkedin-brands.svg';

function Footer() {
  return (
    <footer class='bg-blackVeryDark flex justify-center items-center h-10 w-full mt-8'>
      <h3 class='text-gray mr-4'>Desenvolvido por Luisa</h3>
      <a
        href='https://github.com/LuhBC-pixel'
        target='_blank'
        rel='noreferrer'
        class='mr-4'
      >
        <img src={Github} alt='Github icon' class='w-8' />
      </a>
      <a href='https://www.linkedin.com/in/luisa-boina-02294014b/' target='_blank' rel='noreferrer'>
        <img src={Linkedin} alt='Linkedin icon' class='w-8' />
      </a>
    </footer>
  );
}

export default Footer;
