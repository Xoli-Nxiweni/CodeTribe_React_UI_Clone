import './RightContainers.css';

let RightContainers = () =>{
    return(
        <div className='rightContainers'>
            <div className='topRight'>
                <img src='https://cdn.pixabay.com/photo/2024/04/11/09/24/ai-generated-8689555_640.jpg'/>
                <p>we help SaaS companies <br/> overcome product design<br /> challenges. every single day.</p>
                <button>More</button>
            </div>
            <div className='bottomRight'>
                <div className='anotherLogo2'>
                    <img src='https://img.icons8.com/?size=40&id=212ADDKBpxxA&format=png'/> <h1>Minds</h1>
                </div>
                <div className='bottomSection2'>
                    <h2>increase <br/> business on <br/> social media <br/> reach</h2>
                    <img className='image' src='https://img.freepik.com/free-photo/confident-man-with-red-beard-wearing-full-equipment-holding-snowboard-his-shoulder-looking-away-with-serious-look_613910-19190.jpg'/>
                    <p>using our network of industry<br/> influencer's, we help promote<br/> your content</p>
                    <button className='LM-Btn'>Learn More</button>
                </div>
            </div>
        </div>
    )
}
export default RightContainers;