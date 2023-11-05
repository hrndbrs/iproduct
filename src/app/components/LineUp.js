"use client"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Link from "next/link"
import { Card, SearchBar } from "."
import { fetchProducts, getCategories } from "../store/actions/actionCreators"


function LineUp() {
    const { products, categories } = useSelector(state => state)
    const [search, setSearch] = useState({
        category: "",
        keyword: ""
    })
    const dispatch = useDispatch()

    const displayedProducts = products.data.filter(({ name, categoryId }) => (
        name.toLowerCase().startsWith(search.keyword.toLowerCase())
        && (search.category ? categoryId === +search.category : true)
    ))

    const fetchProps = async () => {
        try {
            await dispatch(fetchProducts())
            await dispatch(getCategories())
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = ({ name, value }) => {
        setSearch(prev => ({
            ...prev, [name]: value
        }))
    }

    useEffect(() => {
        fetchProps()
    }, [])
    return (
        <div id="ourProducts" >
            <div className="flex p-12 justify-center">
                <h1 className="text-5xl text-black uppercase font-extrabold max-w-md text-center">Check out our products</h1>
            </div>
            {products.isLoading
                ? <div className="p-48 text-center">
                    <progress className="progress w-56"></progress>
                </div>
                : !products.error
                && <>
                    <SearchBar categories={categories.data} onChange={handleChange} />
                    <div className="pb-[30rem] mt-8 grid auto-cols-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center px-[10vw] 2xl:px-[20vw] gap-y-3">
                        {
                            displayedProducts.map((product) => (
                                <Link key={product.slug} href={`/products/${product.slug}`}>
                                    <Card product={product} />
                                </Link>
                            ))
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default LineUp