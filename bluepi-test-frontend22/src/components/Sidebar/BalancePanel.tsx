import { useGlobal } from "@/hooks/Global/GlobalContext"

function BalancePanel(): JSX.Element {
    const { amount } = useGlobal()
    return (
        <>
            <div className="lg:flex mb-1 m-2 rounded mx-auto">
                <div className="w-full rounded overflow-hidden shadow-lg m-4 relative flex flex-col">

                    <div className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        Balance
                    </div>

                    <div className="px-6 py-4 h-full">
                        <div className="font-bold text-xl mb-2">{amount} THB</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BalancePanel