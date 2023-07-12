
import aboutimg from '../Images/aboutimg.png';


function AboutSection() {
  

  return (
    <>
      <section className='AboutSec'>
        <span className='heading-text'>ABOUT ME</span>
        <div className='about-text'>
          <img src={aboutimg} alt='Aditya image' className='img' />
          <p className='main-text'>
            "Hello, I'm Aditya Bhattacharjee, a passionate and self-taught aspiring Software Developer. Throughout my
            journey, coding, learning new technologies, and building projects have been incredibly fulfilling experiences.
            Consistency and embracing mistakes as learning opportunities have played a pivotal role in my growth. I remain
            committed to continuous learning and self-improvement, as these qualities pave the way for becoming an
            exceptional programmer.
            <br />
            <br />
            Apart from coding, I have a diverse range of hobbies and interests that bring me joy and enrich my life. I find
            comfort in singing and playing the piano, allowing me to express myself creatively. Additionally, I have a deep
            passion for bodybuilding and fitness, which keeps me motivated and helps me maintain a healthy lifestyle.
            Reading books allows me to expand my knowledge and explore different worlds, while traveling enables me to
            experience diverse cultures and broaden my horizons. I also have a great love for food, delighting in exploring
            various cuisines and discovering the unique flavors of different places. These hobbies collectively contribute
            to my personal growth and add richness to my life."
            <br />
            <br />
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
