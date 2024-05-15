import homeImg from '../../assets/images/home.jpg';

const Footer = () => {
  return (
    <footer
      className="footer px-20 py-10 bg-green-500 text-yellow-50 transition flex justify-between"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <aside>
        <img className="w-20 h-20 rounded " src={homeImg} alt="" />
        <p>
          <span className="font-bold">A Job MarketPlace</span>
          <br />
          Providing reliable tech since 2002
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Home</h6>
        <a className="link link-hover">All Jobs</a>
        <a className="link link-hover">Add A Job</a>
        <a className="link link-hover">My Jobs</a>
        <a className="link link-hover">Blogs</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
