import { useGlobal } from "@/hooks/Global/GlobalContext"

function BanknotePanel(): JSX.Element {
    const { amount, setAmount } = useGlobal()
    return (
        <>
            <div className="lg:flex mb-1 m-2 rounded mx-auto">
                <div className="w-full rounded overflow-hidden shadow-lg m-4 relative flex flex-col">

                    <div className="w-full bg-cyan-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        Load banknote
                    </div>
                    <div className="px-6 py-4 h-full">
                        <div className="flex flex-row justify-center">
                            <div className="cursor-pointer w-20 h-10 bg-cyan-500 text-white m-2 pt-2" onClick={() => setAmount(amount + 20)}>20</div>
                            <div className="cursor-pointer w-20 h-10 bg-cyan-500 text-white m-2 pt-2" onClick={() => setAmount(amount + 50)}>50</div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div className="cursor-pointer w-20 h-10 bg-cyan-500 text-white m-2 pt-2" onClick={() => setAmount(amount + 100)}>100</div>
                            <div className="cursor-pointer w-20 h-10 bg-cyan-500 text-white m-2 pt-2" onClick={() => setAmount(amount + 500)}>500</div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div className="cursor-pointer w-20 h-10 bg-cyan-500 text-white m-2 pt-2" onClick={() => setAmount(amount + 1000)}>1000</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BanknotePanel