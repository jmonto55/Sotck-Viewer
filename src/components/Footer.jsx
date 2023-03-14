import github from '../assets/github.svg';

const Footer = () => (
  <>
    <footer className="mt-10 opacity-75">
      <p className="text-lg text-center text-white mb-2">© 2023 Jose Montoya. All rights reserved.</p>
      <p className="text-base text-center text-white">Built with 💙 in Medellin, CO</p>
      <div className="flex justify-evenly">
        <img src={github} alt="github" className="opacity-10" />
      </div>
    </footer>
  </>
);

export default Footer;
