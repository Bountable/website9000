
import powerlines from '../assets/Powerlines-in-the-Beijing-populated-areas-fixed.svg'

export default function AboutMe() {
    return (
        <>
            <div className="container mt-4" style={{ float: 'left', width: '50%' }}>
                <p>Software Engineer.</p>
                <p>Full Stack.</p>
                <p>Enjoyer of good design.</p>
            </div>

            <img 
                src={powerlines} 
                alt="Powerlines illustration" 
                style={{ 
                    float: 'right', 
                    height: '100vh', 
                    marginTop: '-150px', 
                }} 
            />
        </>
    );
  }
