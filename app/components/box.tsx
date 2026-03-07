interface BoxProps {
    width: number | "full";
    imageSrc: string;
    title: string | null;
    children: React.ReactNode;

}

const Box = (props: BoxProps) => {
    return (
        <div
            style={{ width: props.width === "full" ? "100%" : `${props.width * 4}px` }}
            className={`p-12 h-full shrink-0 border shadow-2xl shadow-gray-400/20 text-justify relative bg-[#e1e6ec] backdrop-blur-3xl z-50 border-black/20 rounded-lg`}>
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
                {props.title && <h1 className="ml-6 shrink-0">{props.title}</h1>}
                <div className="absolute inset-0 h-10 bg-[#e1e6ec] -z-10" />
            </div>
            {props.children}
        </div>
    )
}

export default Box;
