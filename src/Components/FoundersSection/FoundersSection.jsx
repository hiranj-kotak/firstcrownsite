import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import founders from '../../Data/founders.json'
import theme from '../../Data/theme'
import ProfileCard from './ProfileCard'
import { div } from 'motion/react-client'

gsap.registerPlugin(ScrollTrigger)

export default function FoundersSection() {
  const sectionRef = useRef(null)

  const handleContactClick = () => {
    console.log('Contact button clicked!');
    // Add your contact logic here (e.g., open a form, navigate to a contact page)
  };

  useEffect(() => {
    const items = gsap.utils.toArray('.founder-card')
    gsap.fromTo(
      items,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      },
    )
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div className="  min-h-screen flex  items-center justify-around bg-primary p-4">
      <ProfileCard
        name="Javi A. Torres"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        miniAvatarUrl="https://i.ibb.co/L8G4z1Z/man-with-long-hair-and-beard.jpg" // Optional: smaller version of avatar
        showUserInfo={true}
        enableTilt={true}
        onContactClick={handleContactClick}
      />
      <ProfileCard
        name="Javi A. Torres"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        miniAvatarUrl="https://i.ibb.co/L8G4z1Z/man-with-long-hair-and-beard.jpg" // Optional: smaller version of avatar
        showUserInfo={true}
        enableTilt={true}
        onContactClick={handleContactClick}
      />
    </div>


    // <section
    //   ref={sectionRef}
    //   className="w-full px-[5vw] pb-[10vh] min-h-screen"
    //   style={{ background: theme.colors.white }}
    // >
    //   <h2
    //     className="text-4xl md:text-5xl font-bold text-center mb-20"
    //     style={{ color: theme.colors.text }}
    //   >
    //     Meet Our Founders
    //   </h2>
    //   <div>

    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24 max-w-6xl mx-auto">
    //     {founders.map((founder, idx) => (
    //       <div
    //         key={idx}
    //         className="founder-card group relative text-center rounded-xl min-h-[320px] pt-32 pb-10 px-8 flex flex-col items-center justify-start mt-32"
    //         style={{
    //           border: `1.5px solid ${theme.colors.border}`,
    //           background: theme.colors.card,
    //         }}
    //       >
    //         {/* Overlapping Profile Photo */}
    //         <div className="absolute -top-32 left-1/2 -translate-x-1/2 z-10">
    //           <div
    //             className="w-64 h-64 rounded-full flex items-center justify-center bg-white"
    //             style={{ border: `2px solid ${theme.colors.border}` }}
    //           >
    //             <div className="w-[240px] h-[240px] rounded-full overflow-hidden">
    //               <img
    //                 src={founder.image}
    //                 alt={founder.name}
    //                 className="w-full h-full object-cover rounded-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         {/* Content */}
    //         <div className="mt-6">
    //           <div
    //             className="text-2xl font-bold mb-0.5"
    //             style={{ color: theme.colors.purpleDark }}
    //           >
    //             {founder.name}
    //           </div>
    //           <div
    //             className="text-base mb-3"
    //             style={{ color: theme.colors.textSecondary }}
    //           >
    //             {founder.role}
    //           </div>
    //           <p
    //             className="text-sm leading-normal text-center"
    //             style={{ color: theme.colors.textSecondary }}
    //           >
    //             {founder.desc}
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  )
}
