import React from 'react';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import { gsap } from "gsap";

function Home(props) {

    const particlesInit = React.useCallback(async engine => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = React.useCallback(async container => {
        //await console.log(container);
    }, []);

    return (
        <div className='home-wrap'>
            <div className="container">
                <div className="intro relative z-10 min-h-[80vh] flex items-center">
                    <div className="intro-wrap w-full">
                        <div className='flex items-start md:items-center w-4/4 flex-col md:flex-row md:w-3/4'>
                            <div className='text-[2.7rem] md:text-[15rem] font-[Aerospace] mr-3 leading-none'>Hi<small>,</small></div>
                            <div className='text-[2.7rem] md:text-[5rem]'>I'm <strong className='font-black'>Fazeelat</strong>,<sub> & </sub>I Build <strong>Websites</strong></div>
                        </div>
                        <p className='text-1xl md:text-2xl mt-2 mb-[3rem]'>{props.skills}</p>
                        <Link to="/contact" className="px-[50px] py-4 text-[var(--bg)] text-center border border-solid border-[var(--green)] rounded bg-[var(--green)] hover:bg-[var(--blue)] hover:border-[var(--blue)] hover:text-white transition-colors duration-300 font-black">Contact Me</Link>
                    </div>
                </div>

                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#00203f",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#55eea8",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1000,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        </div>

    );
};

export default Home;