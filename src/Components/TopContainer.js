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

            <button>Get's More</button>
        </div>
        <div className='containerWrapper'>
            <div className = 'TopRightContainer'>
                <div className ='TwoLT'>
                <h1>2x</h1>
                <p>Less Time</p>
                </div>
                <div className = 'TwoLT-Para'>Spent on Development- <br/>Ready Design</div>
                <div className ='ThirtyP'>
                <h1>30%</h1>
                <p>Cut by</p>
                </div>
                <div className = 'ThirtyP-Para'>Time on new <br /> Design Delivery</div>
            </div>
            <div className = 'TopRightContainer'>
                <div className='anotherLogo'>
                <img src='https://img.icons8.com/?size=40&id=212ADDKBpxxA&format=png'/> <h1>Minds</h1>
                </div>
            </div>
        </div>
        </div>
    );
}
export default TopContainer;

