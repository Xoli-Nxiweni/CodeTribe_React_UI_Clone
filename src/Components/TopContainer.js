import './TopContainer.css'

let TopContainer = () =>{
    return (
        <div className='Top'>
            <div className = 'TopLeftContainer'>
            <h1>A Digital <br/>
                Creative Agency
            </h1>
            <br/>
            <p>We work on a diverse range of projects, from helping<br />
            startups get their business up</p>

            <button className='btn2'>Get's More</button>
        </div>
        <div className='containerWrapper'>
            <div className = 'TopRightContainer1'>
                <div className ='TwoLT'>
                <h1>2<span>x</span></h1>
                <p>Less Time</p>
                </div>
                <div className = 'TwoLT-Para'><p>Spent on Development- <br/>Ready Design</p></div>
                <div className ='ThirtyP'>
                <h1>30<span>%</span></h1>
                <p>Cut by</p>
                </div>
                <div className = 'ThirtyP-Para'><p>Time on new <br /> Design Delivery</p></div>
            </div>
            <div className = 'TopRightContainer2'>
                <div className='anotherLogo'>
                <img src='https://img.icons8.com/?size=40&id=212ADDKBpxxA&format=png'/> <h1 className='coloredLogo'>Minds</h1>
                </div>
            </div>
        </div>
        </div>
    );
}
export default TopContainer;

