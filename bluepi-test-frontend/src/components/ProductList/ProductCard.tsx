import productApi from "@/services/api/product.api"
import { useState } from "react"

type ProductItem = {
    id: number
    name: string
    description: string
    price: number
    totalAmount: number
    imgUrl: string
    canbuy: boolean
    amount: number
    setAmount: (amount: number) => void
}
function ProductCard(props: ProductItem): JSX.Element {

    async function buy(): Promise<void> {
        try {
            if (confirm("Do you want to buy " + props.name + " ?")) {
                await productApi.patchProduct(props.id)
                props.setAmount(props.amount - props.price)
            } else {
                return
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className={"lg:flex mb-1 m-2 rounded mx-auto" + (props.totalAmount <= 0 ? " opacity-50" : "")}>
                <div className="w-full rounded overflow-hidden shadow-lg m-4 relative flex flex-col">

                    <div className="w-full bg-teal-300  text-teal-800 py-2 px-4 rounded inline-flex items-center">
                        <div className="w-full">
                            Price : <span className="font-bold"> {'\u00A0' + props.price + '\u00A0'} THB {'\u00A0'} </span>
                        </div>
                    </div>
                    <div className="w-full bg-teal-300  text-teal-800 py-2 px-4 -mt-2 rounded inline-flex items-center">
                        {
                            props.totalAmount > 0
                                ?
                                <div className="w-full">
                                    Count : <span className="font-bold"> {'\u00A0' + props.totalAmount + '\u00A0'} </span>
                                </div>
                                :
                                <div className="w-full">
                                    <span className="font-bold text-red-500"> Out of stock </span>
                                </div>
                        }

                    </div>
                    <img className="w-full" src={props.imgUrl} alt="Sunset in the mountains" />

                    <div className="px-6 py-4 h-full">
                        <div className="font-bold text-xl mb-2">{props.name}</div>
                        <p className="text-teal-700 text-base">
                            {props.description}
                        </p>
                    </div>

                    {props.canbuy
                        ?
                        <button className="w-full bg-teal-300  text-teal-800 font-bold py-2 px-4 rounded  items-center" onClick={buy} disabled={props.totalAmount <= 0}>
                            {props.totalAmount <= 0 ? <span className="font-bold text-red-500">Out of stock</span> : <span>Buy</span>}
                        </button>
                        :
                        <div className="w-full bg-teal-100  text-yellow-700 font-bold py-2 px-4 rounded  items-center">
                            {props.totalAmount <= 0 ? <span className="font-bold text-red-500">Out of stock</span> : <span>Load {props.price - props.amount} THB more to buy</span>}
                        </div>
                    }

                </div>
            </div>


        </>
    )
}

export default ProductCard