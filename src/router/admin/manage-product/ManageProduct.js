import React, { useEffect, useState } from 'react'
import '../Admin.css'
import { db } from '../../../server'
import { collection, getDocs } from 'firebase/firestore'
import Products from '../../../components/products/Products'

function ManageProduct() {
    const [refresh, setRefresh] = useState(false)
    const [data, setData] = useState([])
    const productRef = collection(db, 'products')

    useEffect(() => {
        const fetchData = async () => {
            const getData = await getDocs(productRef)
            setData(getData.docs.map(i => ({ ...i.data(), id: i.id })))
        }
        fetchData()
    }, [refresh])
    return (
        <div className='container manage_product'>
            <h2>ManageProduct</h2>
            <Products data={data} setRefresh={setRefresh} admin={true} like={false} />
        </div>
    )
}

export default ManageProduct