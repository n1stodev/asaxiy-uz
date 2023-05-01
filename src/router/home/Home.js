import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products'
import { db } from '../../server'
import { collection, getDocs } from 'firebase/firestore'
import AboutUs from '../../components/about-us/AboutUs'

function Home() {
    const [data, setData] = useState([])
    const productRef = collection(db, 'products')

    useEffect(() => {
        const fetchData = async () => {
            const getData = await getDocs(productRef)
            setData(getData.docs.map(i => ({ ...i.data(), id: i.id })))
        }
        fetchData()
    }, [])
    return (
        <div>
            <Banner />
            <Products data={data} admin={false} like={true} />
            <AboutUs />
        </div>
    )
}

export default Home