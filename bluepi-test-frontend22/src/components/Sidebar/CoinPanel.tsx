import { useGlobal } from "@/hooks/Global/GlobalContext"

function CoinPanel():JSX.Element {
    const { amount, setAmount } = useGlobal()

    return(
        <>
        <div className="lg:flex mb-1 m-2 rounded mx-auto">
                <div className="w-full rounded overflow-hidden shadow-lg m-4 relative flex flex-col">

                    <div className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        Load coin
                    </div>
                    <div className="px-6 py-4 h-full">
                        <div className="flex flex-row justify-center">
                            <div className="cursor-pointer w-20 h-10 bg-indigo-500 text-white m-2 pt-2" onClick={() => setAmount(amount + 1)}>1</div>
                            <div className="cursor-pointer w-20 h-10 bg-indigo-500 text-white m-2 pt-2" onClick={() => setAmount(amount + 5)}>5</div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div className="cursor-pointer w-20 h-10 bg-indigo-500 text-white m-2 pt-2" onClick={() => setAmount(amount + 10)}>10</div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinPanel