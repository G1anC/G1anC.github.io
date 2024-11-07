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
		<div ref={bgRef} className={`absolute top-0 left-0 blur-2xl scale-[110%] inset-0`} style={{
			backgroundImage: "url('/images/bg.png')",
			backgroundSize: "fit",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
		}}/>
  	);
}

export default Background;