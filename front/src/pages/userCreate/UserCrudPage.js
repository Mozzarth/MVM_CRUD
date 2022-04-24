import UserCrudListComponents from './UserCrudListComponents'
import UserCrudForm from './UserCrudFormComponents'
import userService from './user.service'
// import PropTypes from 'prop-types'
import React, { useState } from 'react'

const UserCrudComponent = () => {
    const initialUserValue = { nombre: "", apellido: "", email: "", phoneNumber: "" }
    const [userValues, setUserValues] = useState(initialUserValue)
    const [editUserValues, setEditUserValues] = useState({...initialUserValue,id:""})

    return (
        <>
            <UserCrudForm setUser={setUserValues} editUser={editUserValues} />
            <UserCrudListComponents userValues={userValues} setEditUser={setEditUserValues} />
        </>
    )
}

export const saveUser = async (user) => {
    try {
        await userService.guardarUsuario(user)
        alert(`Usuario guardado con exito ${user.nombre}`)
    } catch (error) {
        console.log({ error })
        alert(`Ocurrio un error al guardar usuario ${error?.request?.response || ''}`)
        throw error
    }
}
export const updateUser = async (user) => {
    try {
        await userService.updateUSer(user)
    } catch (error) {
        console.log({ error })
        alert("Ocurrio un error al actualizar usuario")
        throw error
    }
}
export const deleteUser = async (id) => {
    try {
        await userService.anularUsuario(id)
        alert(`Usuario eliminado con exito..!`)
    } catch (error) {
        console.log({ error })
        alert("Ocurrio un error al eliminar usuario")
        throw error
    }
}
export const allUser = async () => {
    try {
        return await userService.getUser()
    } catch (error) {
        console.log(alert)
        alert(`Ocurrio un error al cargar usuarios ${error?.request?.response || ''}`)
        throw error
    }
}
// UserCrudComponent.propTypes = {
//     value: PropTypes.number
// }

export default UserCrudComponent

