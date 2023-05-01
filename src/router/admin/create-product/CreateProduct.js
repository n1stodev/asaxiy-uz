import React, { useRef, useState } from 'react'
import '../Admin.css'
import { db } from '../../../server'
import { collection, addDoc } from 'firebase/firestore'

function CreateProduct() {
    let url1
    let url2
    let url3
    const title = useRef()
    const price = useRef()
    const images = [
        url1 = useRef(),
        url2 = useRef(),
        url3 = useRef()
    ]
    const [loading, setLoading] = useState(false)

    const productRef = collection(db, 'products')

    const handleCreate = async e => {
        e.preventDefault()
        setLoading(true)
        let newPro = {
            title: title.current.value,
            price: +price.current.value,
            images: [
                url1.current.value,
                url2.current.value,
                url3.current.value,
            ]
        }
        await addDoc(productRef, newPro)
            .then(res => {
                title.current.value = ''
                price.current.value = ''
                images[0].current.value = ''
                images[1].current.value = ''
                images[2].current.value = ''
                console.log(res)
            })
            .catch(res => console.log(res))
            .finally(() => setLoading(false))
    }
    return (
        <div className='create__pro'>
            <h2>Create Product</h2>
            <form action="" onSubmit={handleCreate}>
                <input required ref={title} type="text" placeholder='Title' />
                <input required ref={price} type="number" placeholder='Price' />
                <input required ref={images[0]} type="text" placeholder='Url' />
                <input ref={images[1]} type="text" placeholder='Url' />
                <input ref={images[2]} type="text" placeholder='Url' />
                <button disabled={loading} type="submit">{loading ? 'Loading...' : 'Create Product'}</button>
            </form>
        </div>
    )
}

export default CreateProduct