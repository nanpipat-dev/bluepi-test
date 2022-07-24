import productApi from "@/services/api/product.api"
import { useState } from "react"
import {confirmAlert} from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"

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
            confirmAlert({
                title: 'Do you want to buy ' + props.name + ' ?',
                message: 'Confirm to buy',
                buttons: [
                    {
                        label: 'YES',
                        onClick: async() => {
                            await productApi.patchProduct(props.id)
                            props.setAmount(props.amount - props.price)
                            confirmAlert({
                                title: "Success",
                                buttons:[
                                    {
                                        label: 'OK'
                                    }
                                ]
                            })
                        }
                    },
                    {
                        label: 'NO',
                    }
                ]
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className={"lg:flex mb-1 m-2 rounded mx-auto" + (props.totalAmount <= 0 ? " opacity-50" : "")}>
                <div className="relative flex flex-col w-full m-4 overflow-hidden rounded shadow-lg">

                    <div className="inline-flex items-center w-full px-4 py-2 text-teal-800 bg-teal-300 rounded">
                        <div className="w-full">
                            Price : <span className="font-bold"> {'\u00A0' + props.price + '\u00A0'} THB {'\u00A0'} </span>
                        </div>
                    </div>
                    <div className="inline-flex items-center w-full px-4 py-2 -mt-2 text-teal-800 bg-teal-300 rounded">
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

                    <div className="h-full px-6 py-4">
                        <div className="mb-2 text-xl font-bold">{props.name}</div>
                        <p className="text-base text-teal-700">
                            {props.description}
                        </p>
                    </div>

                    {props.canbuy
                        ?
                        <button className="items-center w-full px-4 py-2 font-bold text-teal-800 bg-teal-300 rounded" onClick={buy} disabled={props.totalAmount <= 0}>
                            {props.totalAmount <= 0 ? <span className="font-bold text-red-500">Out of stock</span> : <span>Buy</span>}
                        </button>
                        :
                        <div className="items-center w-full px-4 py-2 font-bold text-yellow-700 bg-teal-100 rounded">
                            {props.totalAmount <= 0 ? <span className="font-bold text-red-500">Out of stock</span> : <span>Load {props.price - props.amount} THB more to buy</span>}
                        </div>
                    }

                </div>
            </div>
            
        </>
    )
}

export default ProductCard