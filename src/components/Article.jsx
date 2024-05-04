import HomeCard from "./HomeCard"
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'


const Articles = () => {
  return (
    <div className="w-full" >
        <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-8" > 
            <HomeCard image={Card1} description="The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. It was formed 4.6 billion years ago." />
            <HomeCard image={Card2} description="Spaceman most commonly refers to: Astronaut or cosmonaut, a person trained to operate or serve aboard a spacecraft."/>
            <HomeCard image={Card3} description="Milky Way Galaxy, large spiral system of about several hundred billion stars, one of which is the Sun."/>
        </div>
    </div>
  )
}

export default Articles
