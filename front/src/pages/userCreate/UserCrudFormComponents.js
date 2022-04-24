import React, { Fragment, useState, useEffect } from 'react'
import { saveUser, updateUser } from './UserCrudPage'
// import PropTypes from 'prop-types'
function UserCrudFormComponents({ setUser, editUser }) {

    const initialValue = { id: null, nombre: "", apellido: "", email: "", phoneNumber: "" }
    const [values, setValues] = useState(initialValue)

    useEffect(() => {
        setValues({ ...editUser })
        console.log(values)
    }, [editUser])

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(values)
        if (values.id) {
            updateUser({ ...values })
                .then(u => {
                    setValues({ ...initialValue })
                })
                .catch(ex => ex)

        } else {
            saveUser(values)
                .then(u => {
                    setUser({ ...values })
                    setValues({ ...initialValue })
                })
                .catch(ex => ex)
        }
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })
    }

    const action = () => {
        return (values.id == null || values.id.length == 0) ? "Crear" : "Actualizar"
    }
    return (
        <>
            {/* <input value={values.id}></input> */}
            <form className="container p-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                        <input onChange={handleInputChange} value={values.nombre} type="text" className="form-control-plaintext" name="nombre" placeholder="">
                        </input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="apellidp" className="col-sm-2 col-form-label">Apellido</label>
                    <div className="col-sm-10">
                        <input onChange={handleInputChange} value={values.apellido} type="text" className="form-control-plaintext" name="apellido" placeholder="">
                        </input>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onChange={handleInputChange} value={values.email} type="text" className="form-control-plaintext" name="email" placeholder="email@example.com">
                        </input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Telefono</label>
                    <input value={values.phoneNumber} onChange={handleInputChange} type="number" min="1000000000" max="9999999999" className="form-control"
                        name="phoneNumber" aria-describedby="emailHelp" >

                    </input>
                    <small name="emailHelp" className="form-text text-muted">Numero telefonico 10</small>
                </div>
                <button type="submit" className="btn btn-primary">{action()}</button>
            </form>
        </>
    )
}

// UserCrudFormComponents.propTypes = {

// }

export default UserCrudFormComponents

