import github from '../assets/github.svg';

const Footer = () => (
  <div className="">
    <footer className="m-auto mt-10 w-full absolute -bottom-16 bg-neutral-900">
      <p className="text-base text-center text-white mb-2">© 2023 Jose Montoya. All rights reserved.</p>
      <p className="text-sm text-center text-white">Built with💙in Medellin, CO</p>
      <div className="flex justify-evenly">
        <img src={github} alt="github" className="opacity-10" />
      </div>
    </footer>
  </div>
);

export default Footer;
