import "./HomePage.css"; // Import the CSS file
import Typewriter from "typewriter-effect";


export default function HomePage() {
 
  return (
    <div className="homepage bg-slate-950">
    
      <div className="HeroSection">
      <div className="HeroText">
        <div className="vision">
          <Typewriter
          className="typewriter"
            options={{strings: ['Apoyo', 'Colaboración' , 'Empoderamiento'],
            autoStart: true,
          }}
          />
          <h3>para todos los <br></br> hispanohablantes en Texas.</h3>
        </div>
        <div className="mision">
          <h3>Misión: Promover la solidaridad entre los hispanohablantes 
            mediante el intercambio de recursos, habilidades y apoyo mutuo,
             además de aprender y celebrar nuestra rica diversidad cultural.
          </h3>
        </div>
      </div>
        <button
          className="BookApptButton"
          onClick={() =>
            (window.location.href =
              "https://book.squareup.com/appointments/dfgljw70mpc8dx/location/9PV6DKFGH39H7/services")
          }
        >
          Join Our Community
        </button>
        <button
          className="BookApptButton"
          onClick={() =>
            (window.location.href =
              "https://book.squareup.com/appointments/dfgljw70mpc8dx/location/9PV6DKFGH39H7/services")
          }
        >
          Support Our Mission
        </button>
       
        <p className="SubParaHeroSection">contact us</p>
      </div>
    </div>
  );
}