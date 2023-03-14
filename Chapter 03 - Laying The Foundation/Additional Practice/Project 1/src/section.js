import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
export function section(){


    return(
        <section>
            <div className="left-section">
                <h3>Be Focus and Productive</h3>
                <p>Not just an ordinary headphones.It's designed for meditation</p>
                <button>Learn more</button>
            </div>
            <div className="right-section">
                <div className="top-images">
                    <img src={img1} alt="" className="first-img"/>
                    <img src={img2} alt="" className="second-img"/>
                </div>
                <div className="bottom-image">
                    <img src={img3} alt="" className="third-img" />
                </div>
            </div>

    </section>
    )

}