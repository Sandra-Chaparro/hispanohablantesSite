import "./HomePage.css"; // Import the CSS file


export default function HomePage() {
 
  return (
    <div className="homepage bg-slate-950">
 
      <div className="HeroSection">
        <button
          className="BookApptButton"
          onClick={() =>
            (window.location.href =
              "https://book.squareup.com/appointments/dfgljw70mpc8dx/location/9PV6DKFGH39H7/services")
          }
        >
          Book Appointment
        </button>
        <h1 className="ParaHeroSection">Barber in Allen, TX</h1>
        <p className="SubParaHeroSection">Accepting new clients.</p>
      </div>
    </div>
  );
}