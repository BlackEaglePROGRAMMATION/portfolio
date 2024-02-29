import skills from './../../datas/skills'
import './index.css'

function Slider() {
    return (
        <div className="slider">
            {skills.map((skill, idx) => 
                <div key={idx} className="slide">
                    <img src={skill.logo} alt="Logo" />
                </div>
            )}
        </div>
    )
}
export default Slider