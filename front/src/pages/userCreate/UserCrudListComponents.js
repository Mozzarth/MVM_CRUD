import { allUser, deleteUser } from './UserCrudPage'
// import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

const UserCrudListComponents = ({ userValues, setEditUser }) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        allUser()
            .then(usersP => setUsers(u => [...usersP.data]))
    }, [])
    // Para no hacer la peticion http
    useEffect(() => {
        setUsers(u => [userValues, ...u])
    }, [userValues])

    const _deleteUser = (id) => {
        deleteUser(id)
            .then(resp => {
                setUsers(u => [...users.filter(user => user.id !== id)])
            })
    }
    const _editUser = (user) => {
        setEditUser({ ...user })
    }
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Anular</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map(user => (
                            <tr key={user.id} className="table-active">
                                <th scope="row">{user.nombre}</th>
                                <td>{user.apellido}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td><button onClick={() => _editUser(user) }> <i className="Large material-icons">edit</i></button> </td>
                                <td><button onClick={() => _deleteUser(user.id)}><i className="Large material-icons">clear</i></button> </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </>
    )
}

// UserCrudListComponents.propTypes = {

// }

export default UserCrudListComponents

