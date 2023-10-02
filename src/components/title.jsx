import './title.css'
import logoMor from './../assets/mor.svg'

function Title() {
    return (
        <div className="big-title">
            <img src={logoMor} alt="" className='logo-mor'/>
            <div className='small-child'>
                MOR SOFTWARE
            </div>
            <div className='big-child'>
                Explore with Mor
            </div>
        </div>
    )
}

export default Title