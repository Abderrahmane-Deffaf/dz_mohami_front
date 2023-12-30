import image from '../assets/image.png'
const Home = () => {
  return (
    <div>
      <div className="content">
        <h1>Avocats expérimentés sont prêts à aider.</h1>
        <p>Bienvenue chez Avvo, où l'expertise juridique rencontre le service exceptionnel.</p>
         <CostumLink text={"Trouver un avocat"} />
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Home