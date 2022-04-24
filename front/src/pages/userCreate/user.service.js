import axios from 'axios';
// import axios from 'a'


const uri = "http://localhost:3050/api"

export class UserService {

    async guardarUsuario(user) {
        try {
            console.log(user,"crud")
            return axios.post(`${uri}/user`,{
                nombre : user.nombre,
                apellido : user.apellido,
                email : user.email,
                telefono: user.phoneNumber
            })
        } catch (error) {
            throw error
        }
    }
     async updateUSer(user){
        try {
            return axios.put(`${uri}/user/${user.id}`, {
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.email,
                telefono: user.telefono
            })
        } catch (error) {
            throw error
        }
    }
    async anularUsuario(id) {
        try {
            return axios.delete(`${uri}/user/${id}`)
        } catch (error) {
            throw error
        }
    }
    async getUser() {
        try {
            return axios.get(`${uri}/user`)
        } catch (error) {
            throw error
        }
    }

}


export default new UserService()