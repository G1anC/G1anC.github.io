import React from 'react';
import { gsap } from 'gsap';

const Background = () => {
	const bgRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (bgRef.current)
			gsap.to(bgRef.current, {
				scale: 1,
				duration: 3,
				ease: "power1.out",
					filter: "blur(0px)",
					onComplete: () => console.log('Animation complete')
			});
	}, [bgRef]);

	return (
<<<<<<< HEAD
		<div ref={bgRef} className={`fixed z-[-1] blur-[20px] scale-[110%] inset-0`} style={{
			backgroundImage: "url('/images/bg*.png')",
=======
		<div ref={bgRef} className={`fixed z-[-1] blur-2xl scale-[110%] inset-0`} style={{
			backgroundImage: "url('/images/bg.png')",
>>>>>>> 32d7f77edaacefaa318f9ef31b8a9e7208c76375
			backgroundSize: "fit",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
		}}/>
  	);
}

export default Background;