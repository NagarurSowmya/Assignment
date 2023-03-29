import React, { useState } from 'react'

const CreateForm = () => {
    let [array, setArray] = useState([])
    let [inputdate, setInputdata] = useState({ name: "", email: "", mobileNo: "", designation: "", gender: "", course: "" })
    let [index, setIndex] = useState()
    let [bolin, setBolin] = useState(false)
    let { name, email, mobileNo, designation, gender, course } = inputdate

    function data(event) {
        setInputdata({ ...inputdate, [event.target.name]: event.target.value })
    }

    let addInputdata = (event) => {
        setArray([...array, { name, email, mobileNo, designation, gender, course }])
        setInputdata({ name: "", email: "", mobileNo: "", designation: "", gender: "", course: "" })
        event.preventDefault()
    }

    function deleteData(i) {
        let total = [...array]
        total.splice(i, 1)
        setArray(total)
    }

    function updateData(i) {
        let { name, email, mobileNo, designation, gender, course } = array[i]
        setInputdata({ name, email, mobileNo, designation, gender, course })
        setBolin(true)
        setIndex(i)
    }

    function updateinfo(event) {
        let total = [...array]
        total.splice(index, 1, { name, email, mobileNo, designation, gender, course })
        setArray(total)
        setBolin(false)
        setInputdata({ name: "", email: "", mobileNo: "", designation: "", gender: "", course: "" })
        event.preventDefault()
    }
    var n = 1

    return (
        <div>
            <div className='create_form'>
                <div>
                    <form action="">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label className='form_label' htmlFor="">Name</label>
                                    </td>
                                    <td>
                                        <input onChange={data} className='inputFeild' value={inputdate.name || ""} name="name" type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='form_label' htmlFor="">Email</label>
                                    </td>
                                    <td>
                                        <input onChange={data} className='inputFeild' value={inputdate.email || ""} name="email" type="email" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='form_label' htmlFor="">Mobile No</label>
                                    </td>
                                    <td>
                                        <input onChange={data} className='inputFeild' value={inputdate.mobileNo || ""} name="mobileNo" type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='form_label' htmlFor="">Designation</label>
                                    </td>
                                    <td>
                                        <input onChange={data} className='inputFeild' value={inputdate.designation || ""} name="designation" type="text" list='items' placeholder='HR/Manager/sales' />
                                        <dataList id="items">
                                            <option value="HR"></option>
                                            <option value="Manager"></option>
                                            <option value="Sales"></option>
                                        </dataList>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='form_label' style={{ display: "inline-block" }} htmlFor="">Gender</label>
                                    </td>
                                    <td>
                                        <input onChange={data} className='inputBtn' value={inputdate.gender} name="gender" type="radio" />Male
                                        <input onChange={data} className='inputBtn' value={inputdate.gender} name="gender" type="radio" />Female
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='form_label' htmlFor="">Course</label>
                                    </td>
                                    <td>
                                        <input onChange={data} className='inputBtn' value={inputdate.course || ""} name="course" type="checkbox" />MCA
                                        <input onChange={data} className='inputBtn' value={inputdate.course || ""} name="course" type="checkbox" />BCA
                                        <input onChange={data} className='inputBtn' value={inputdate.course || ""} name="course" type="checkbox" />BSC
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <div style={{ padding: "2px", display: "flex", justifyContent: "center" }}>
                                            <button className='submit' onClick={!bolin ? addInputdata : updateinfo}>{!bolin ? "Submit" : "Update"}</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>

            <div className='table_div'>
                <table className='table' border="1" rules="all" cellPadding="5px" cellSpacing="5px">
                    <thead>
                        <tr>
                            <td>S No</td>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Designation</th>
                            <th>Gender</th>
                            <th>Course</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            array && array.map((item, i) => {
                                return (
                                    <tr>
                                        <td>{n++}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobileNo}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.course}</td>
                                        <td><button className='update_btn' onClick={() => updateData(i)}>Update</button></td>
                                        <td><button className='delete_btn' onClick={() => deleteData(i)}>Delete</button></td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CreateForm