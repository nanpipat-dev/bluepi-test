import { Products } from "@/model/ProductModel"
import { AxiosPromise } from "axios"
import { httpClient } from "../axiosInstance"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000"

const getAllProduct = (totalAmount: number): AxiosPromise<Products[]> => httpClient({
    method: 'get',
    url: `${BASE_URL}/products/get?totalAmount=${totalAmount}`,
})

const patchProduct = (productID: number): AxiosPromise<any> => httpClient({
    method: 'patch',
    url: `${BASE_URL}/products/update?product_id=${productID}`,
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllProduct,
    patchProduct
}