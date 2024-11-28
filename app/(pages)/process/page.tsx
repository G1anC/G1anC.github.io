import LayoutComponent from "@/app/components/layoutComponent";

export default function Process() {
    return (
        <LayoutComponent name={"Process"}>
        <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="h-full w-[1px] bg-black"></div>
                <div className="bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"></div>
            </div>
        </div>
        <div className="my-8">20</div>
        <div className="flex flex-col items-center h-full justify-start">
            <div className="flex flex-col h-full items-center">
                <div className="h-full w-[1px] bg-black"></div>
                <div className="bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"></div>
            </div>
        </div>
        <div className="h-full flex-col flex items-center justify-between">
            <div className="flex flex-col items-center h-full justify-start">
                <div className="flex flex-col h-full items-center">
                    <div className="bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"></div>
                    <div className="h-full w-[1px] bg-black"></div>
                </div>
            </div>
            <div className="my-8">24</div>
            <div className="flex flex-col items-center h-full justify-start">
                <div className="flex flex-col h-full items-center">
                    <div className="h-full w-[1px] bg-black"></div>
                    <div className="bg-black rounded-full h-[6px] w-[6px] flex-shrink-0"></div>
                </div>
            </div>
        </div>
        </LayoutComponent>
    )
}