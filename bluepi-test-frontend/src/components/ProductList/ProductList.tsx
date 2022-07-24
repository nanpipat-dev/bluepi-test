
import { useGlobal } from "@/hooks/Global/GlobalContext"
import { Products } from "@/model/ProductModel"
import productApi from "@/services/api/product.api"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"



function ProductList(): JSX.Element {

    const { amount, setAmount } = useGlobal()

    const [productList, setProductList] = useState<Products[]>([])

    useEffect(() => {
        getallProducts()
    }, [amount])

    async function getallProducts(): Promise<void> {
        try {
            const products = await productApi.getAllProduct(amount)
            setProductList(products.data)
            console.log(products.data, "prodddd")

        } catch (error) {
            console.log(error, "prodddd")
        }
    }

    return (
        <>
            <div className="flex flex-row flex-wrap">
                {productList?.map(product => {
                    return (
                        <div className="basis-1/3" key={product.id}>
                            <ProductCard
                                id={product?.id}
                                name={product?.title}
                                description={product?.description}
                                price={product?.price}
                                totalAmount={product?.total}
                                canbuy={product?.canBuy}
                                imgUrl={product?.imgUrl}
                                amount={amount}
                                setAmount={setAmount}
                            />
                        </div>
                    )
                })
                }

            </div>
            
        </>
    )
}

export default ProductList