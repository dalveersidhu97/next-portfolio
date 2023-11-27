
const Loading = () => {
    return (
        <div>
            <div className='absolute top-0 left-0 bg-[rgba(0,0,0,.6)] w-full h-full z-[500]'></div>
            <div className="z-[1000] m-auto gap-4 absolute top-0 left-0 w-full h-full overflow-auto p-4 text-lg">
                <div className="flex flex-col gap-4 justify-center items-center min-h-full bg-white rounded-md">
                    Loading
                </div>
            </div>
        </div>
    );
}

export default Loading;