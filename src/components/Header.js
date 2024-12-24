import styles from '../scss/Header.module.css'
import { useState, useEffect } from 'react'
import  toast, {Toaster} from "react-hot-toast"
function Header()
{
    const notifySuccess = (msg) => toast.success(msg)
    const notifyError = (msg) => toast.error(msg)

    const [data, setData] = useState({
        name : '',
        lastName : '',
        participation: 0 
    })


    async function handleSubmit(e){
        e.preventDefault()
        console.log("Enviado")

        try{

        await fetch('http://localhost:3001/setData',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
        .then(response=> response.json())
        .then(data=>{
            console.log(JSON.stringify(data, null, 2))
            notifySuccess('Dados enviados com sucesso')
            document.getElementById('name').value  = ""
            document.getElementById('lastName').value = ""
            document.getElementById('participation').value = ""

            setTimeout(()=>{window.location.reload()},2000)
        })
        .catch(err=>{
            notifyError('Falha ao se comunicar com Api')
            console.log(`Eror to fetch: ${JSON.stringify(err,null,2)}`)
        })

        
        
    }catch(err){
            notifyError('Falha ao se comunicar com Api')
            console.log(`Erro to fetch: ${err}`)
        }

    }

    function handleChange(e){
        const { name, value } = e.target

        setData({
            ...data,
            [name] : value
        })

    }

    return(
        <>
            <header className={styles.header}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Coloque um nome"
                        id='name'
                        name='name'
                        required

                        onChange={handleChange}
                    ></input>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Coloque um sobrenome"
                        id='lastName'
                        name='lastName'
                        required
                        onChange={handleChange}
                    ></input>
                    <input
                        type="number"
                        className={styles.input}
                        placeholder="Participação"
                        id='participation'
                        name='participation'
                        required
                        min="0"
                        max="100"
                        step='0.01'
                        onChange={handleChange}
                    ></input>
                    <input
                        type="submit"
                        className={styles.btn}
                    ></input>
                </form>
            </header>
            <Toaster/>
        </>

    )
}


export default Header