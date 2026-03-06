interface BoxProps {
    width: number | "full";
    imageSrc: string;
    title: string | null;
    children: React.ReactNode;

}

const Box = (props: BoxProps) => {
    return (
        <div className={`p-12 ${props.width == "full" ? "w-full" : "w-" + props.width} h-full shrink-0 border text-justify relative bg-[#e1e6ec] border-black/20 rounded-lg`}>
            <div className="absolute -top-7 left-42 -translate-x-1/2 inline-flex items-center px-8">
                {(() => {
                    const isSvg = props.imageSrc.toLowerCase().endsWith('.svg');
                    return (
                        <img
                            src={props.imageSrc}
                            alt={props.imageSrc}
                            className={`pointer-events-none ${isSvg ? 'opacity-66 w-12' : 'w-16'}`}
                        />
                    );
                })()}
                {props.title && <h1 className="ml-6">{props.title}</h1>}
                <div className="absolute inset-0 h-10 bg-[#e1e6ec] -z-10" />
            </div>
            {props.children}
        </div>
    )
}

export default Box;
