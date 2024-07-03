import './NavBar.css'

let NavigationBar = () =>{
    return(
        <div className = 'NavBar'>
            <div className = "logo">
            <img src='https://img.icons8.com/?size=40&id=212ADDKBpxxA&format=png'/> <h1>Minds</h1>
            </div>

            <ul>
                <li className= 'links'>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Blog</a>
                    <a href='#'>Jobs</a>
                </li>
            </ul>

            <button className='btn1'>Your Account</button>
        </div>
    )
}
export default NavigationBar;