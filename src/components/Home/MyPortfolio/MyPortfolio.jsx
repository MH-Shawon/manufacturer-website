import sanjid from '../../../img/shawon.jpg'

const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img className='w-50' src={sanjid} alt="" />
                <div>
                    <h1 className="text-5xl font-bold">MH Shawon</h1>
                    <p className="text-2xl font-bold"> MERN Developer </p>
                    <p className="text-xl">Email: mohsinshawon18@gmail.com </p>
                    <p className="text-xl mb-3">BSc (Running) : Cumilla Victoria Govt. college</p>
                    <p className="font-bold mb-3">SKILLS and TECHNOLOGIES
                        <li>Expertise: JavaScript (ES6), React.js, Bootstrap5, Tailwind, Daisy UI</li>
                        <li>Comfortable: Express JS, Node JS, MongoDB</li>
                        <li>Design Skills: Adobe Photoshop, Figma</li>
                        <li>Tools and Software's: Git, VS Code, Chrome dev tools, Heroku, Netlify, Firebase.</li>
                         </p>
                    <button className='bg-blue-700 text-xl text-white'>See Resume for Project Link</button>
                    
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;