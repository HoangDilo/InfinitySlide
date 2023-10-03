import leftButton from '../assets/left_arrow.svg'
import rightButton from '../assets/right_arrow.svg'
import './button.css'

function Button({ callBackLeft, callBackRight, buttonSt }) {
    return (
        <div className="button-container">
            <div className="navigate-buttons">
                <button onClick={callBackLeft} disabled={buttonSt}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1194 18L9.11938 12L15.1194 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button onClick={callBackRight} disabled={buttonSt}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.11938 6L15.1194 12L9.11938 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <button className='the-different-one'>
                <div>
                    Explore all News
                </div>
                <div className='inside-button'>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.45337 8H12.7867" stroke="url(#paint0_linear_51_45)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.11938 3.33398L12.7861 8.00065L8.11938 12.6673" stroke="url(#paint1_linear_51_45)" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_51_45" x1="3.45337" y1="8.5" x2="12.7867" y2="8.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#D7AC38" />
                                <stop offset="1" stopColor="#ED3334" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_51_45" x1="8.11938" y1="8.00065" x2="12.7861" y2="8.00065" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#D7AC38" />
                                <stop offset="1" stopColor="#ED3334" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default Button