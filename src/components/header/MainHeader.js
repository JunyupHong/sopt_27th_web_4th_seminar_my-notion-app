import './MainHeader.scss';
import Button from '../button/Button';
import MenuIcon from '../../assets/icons/mdi_dehaze.svg';

function MainHeader({ match, history, location }) {
    // console.log(match, history, location);
    return (
        <header className="main-header">
            <img className="main-header__icon" alt="icon" src={MenuIcon}/>
            <nav className="main-header__nav">
                <Button text="[ON SPOT] Web Part" onClickFunc={() => history.push('/')}/>
                <span> / </span>
                <Button text="파트원소개" onClickFunc={() => history.push('/members')}/>
                {/* <div className="button">파트원소개</div> */}
            </nav>
            <div className="empty"></div>
            <div className="main-header__nav">
                <Button text="Share" />
                <Button text="Favorite" />
                <Button text="..."/>
            </div>
        </header>
    );
}

export default MainHeader;