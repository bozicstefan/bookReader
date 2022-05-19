import './Hamburger.css'

const Hamburger = ({ isOpen }) => {
    return (
        <>
            <div className='hamburgerIcon'>
                <div className="burger burger1" style={isOpen ? { transform: 'rotate(45deg)' } : { transform: 'rotate(0)' }}></div>
                <div className="burger burger2" style={isOpen ? { transform: 'translateX(100%)', opacity: '0' } : { transform: 'translateX(0)', opacity: '1' }}></div>
                <div className="burger burger3" style={isOpen ? { transform: 'rotate(-45deg)' } : { transform: 'rotate(0)' }}></div>
            </div>
        </>
    );
}

export default Hamburger;