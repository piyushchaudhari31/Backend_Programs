import React, { useState } from 'react'
import './Add.css'
import { photos } from '../../photo/Photo'
import axios from 'axios'
import { toast } from 'react-toastify'


const Add = () => {


    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Burger"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData(data => ({ ...data, [name]: value }))

    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)

        formData.append("image", image)

        const response = await axios.post(`http://localhost:3000/api/food/add`, formData)

        toast.success("Add Successfully")

        setData({
            name: "",
            description: "",
            price: "",
            category: "Burger"
        })

        setImage(false)


    }


    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add_img flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : photos.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                </div>
                <div className="add_prodtName flex-col">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here' />

                </div>
                <div className="add_category_price">
                    <div className="add_category flex-col">
                        <p>Product Category</p>
                        <select name="category" onChange={onChangeHandler}>
                            <option value="Burger">Burger</option>
                            <option value="Milkshake">Milkshake</option>
                            <option value="Waffle">Waffle</option>
                            <option value="Chunks">Chunks</option>
                        </select>
                    </div>
                    <div className="add_price flex-col">
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type="NUmber" name='price' placeholder='$50' />
                    </div>
                </div>
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default Add
