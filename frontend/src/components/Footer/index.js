import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">

            <div className="bottomFooter">
                <span> © 2022 Flairbnb</span>
                <span> · </span>
                <a href="https://www.yanelys.dev/" target="blank">Yanelys Mena</a>                <span> · </span>
                <a href="https://github.com/yanelys-mena/flairbnb#readme" target="blank">Read Me</a>
                <span> · </span>
                <a href="https://github.com/yanelys-mena" target="blank">GitHub </a>
                <span> · </span>
                <a href="https://www.linkedin.com/in/yanelysmena/" target="blank"> <i className="fab fa-linkedin"></i></a>
            </div>
        </div >
    )
};

export default Footer;