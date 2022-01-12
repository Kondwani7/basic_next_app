import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Next demo</span> Guide
            </h1>
            <p className={headerStyles.description}>
                A simple demo of creating a react app with next js
            </p>           
           
        </div>
    )
}

export default Header;