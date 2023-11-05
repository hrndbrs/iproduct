"use client"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getProductDetail } from "@/app/store/actions/actionCreators"
import prependCurrency from "@/app/helpers/prependCurrency"

function ProductDetail({ params: { slug } }) {
    const [state, setState] = useState({
        isLoading: true,
        product: {},
        error: null
    })
    const [active, setActive] = useState(0)
    const { isLoading, product, error } = state
    const dispatch = useDispatch()

    const images = [product.mainImg]

    if (product.Images) images.push(...product.Images.map(x => x.imgUrl))

    const fetchDetail = async () => {
        try {
            const data = await dispatch(getProductDetail(slug))
            setState((prev) => ({
                ...prev,
                isLoading: false,
                product: data
            }))

        } catch (err) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: err.message
            }))
        }
    }

    useEffect(() => {
        fetchDetail()
    }, [])
    return (
        <div className="pt-24 pb-[30rem]">
            {
                isLoading
                    ? <p>loading</p>
                    : !error
                    && <div>
                        <div className="flex justify-center gap-6">
                            <div className="flex flex-col gap-4 overflow-scroll h-[20vw]">
                                {images.map((img, i) => (
                                    <div className="w-64 aspect-[3/2] overflow-hidden cursor-pointer flex-shrink-0" onClick={() => setActive(i)}>
                                        <img className="w-full object-cover" src={img} key={`image-${i}`} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-center h-[20vw] aspect-video">
                                <img className="h-full object-cover" src={images[active]} alt={product.name} />
                            </div>
                        </div>
                        <div className="flex flex-col px-[25vw] py-12">
                            <div className="md:flex-1 px-4">
                                <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                    {product.name}
                                </div>
                                <div className="badge badge-outline text-black">
                                    {product.Category.name}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm my-4">
                                    {product.description}
                                </p>
                                <div className="flex mb-4">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">
                                            {"Price : "}
                                        </span>
                                        <span className="text-gray-600 dark:text-gray-300">
                                            {prependCurrency(product.price)}
                                        </span>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}


export default ProductDetail