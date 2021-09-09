import Particles from 'react-particles-js';
import {Component} from 'react';

class Particle extends Component{
  
    render(){
        return (
    //         <Particles
    // params={{
	//     "particles": {
	//         "number": {
	//             "value": 60,
	//             "density": {
	//                 "enable": true,
	//                 "value_area": 1500
	//             }
	//         },
	//         "line_linked": {
	//             "enable": true,
	//             "opacity": 0.05
	//         },
	//         "move": {
	//             "direction": "right",
	//             "speed": 0.05
	//         },
	//         "size": {
	//             "value": 2
	//         },
	//         "opacity": {
	//             "anim": {
	//                 "enable": true,
	//                 "speed": 1,
	//                 "opacity_min": 0.05
	//             }
	//         }
	//     },
	//     "interactivity": {
	//         "events": {
	//             "onclick": {
	//                 "enable": true,
	//                 "mode": "push"
	//             }
	//         },
	//         "modes": {
	//             "push": {
	//                 "particles_nb": 1
	//             }
	//         }
	//     },
	//     "retina_detect": true
	// }} className="particle-tag"/>


    <Particles
    params={{
	    "fps_limit": 28,
	    "particles": {
	        "collisions": {
	            "enable": false
	        },
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": false
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "distance": 30,
	            "opacity": 0.4
	        },
	        "move": {
	            "speed": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "opacity_min": 0.05,
	                "speed": 1,
	                "sync": false
	            },
	            "value": 0.4
	        }
	    },
	    "polygon": {
	        "enable": true,
	        "scale": 0.5,
	        "type": "inline",
	        "move": {
	            "radius": 10
	        },
	        "url": "../Assets/bg-home1.jpg",
	        "inline": {
	            "arrangement": "equidistant"
	        },
	        "draw": {
	            "enable": true,
	            "stroke": {
	                "color": "rgba(255, 255, 255, .2)"
	            }
	        }
	    },
	    "retina_detect": false,
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "size": 6,
	                "distance": 40
	            }
	        }
	    }
	}} className="particle-tag"/>
        );
    };

}

export default Particle