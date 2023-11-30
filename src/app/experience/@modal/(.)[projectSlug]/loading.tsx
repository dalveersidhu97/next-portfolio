
const Loading = () => {
    return (
        <div>
            <div className='absolute top-0 left-0 bg-[#000a] dark:bg-[#000] w-full h-full z-[500]'></div>
            <div className="z-[1000] gap-4 absolute top-0 left-0 w-full h-full overflow-auto flex items-center justify-center p-4 text-lg">
                <div className="rounded-md px-4 py-2 bg-foregroundLight">
                    Loading
                </div>
            </div>
        </div>
    );
}

export default Loading;