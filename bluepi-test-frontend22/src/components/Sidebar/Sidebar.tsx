import BalancePanel from "./BalancePanel"
import BanknotePanel from "./BanknotePanel"
import CoinPanel from "./CoinPanel"

function Sidebar(): JSX.Element {
    return(
        <>
        <section className="sidebar">
			<BalancePanel />
            <CoinPanel/>
			<BanknotePanel />
		</section>
        </>
    )
}

export default Sidebar