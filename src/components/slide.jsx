import { list_cards } from "../assets/array"
import './slide.css'
import dot from '../assets/dot.svg'

function Slide({ position, cb, time }) {

    const list_cards_x3 = [list_cards[2], ...list_cards, ...list_cards, ...list_cards];
    
    const style = {
        transform: `translateX(${position}px)`,
        transition: `transform ${time}s`
    }
    // console.log(cb);
    console.log(time);
    
    return (
        <div className="slide-container" style={style} onTransitionEnd={cb}>
            {list_cards_x3.map(item =>
                <div className="cards">
                    <img src={item.img_src} alt="" className="imgs" />
                    <div className="content">
                        <div className="small-content">
                            {item.category}
                            <img src={dot} alt="" className="dots"/>
                            {item.date}
                        </div>
                        <div className="big-content">
                            {item.title}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Slide