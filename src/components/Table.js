import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import { Doughnut } from "react-chartjs-2"
import styles from '../scss/Table.module.css'
function Table()
{

    const [dados, setDados] = useState([])
    const [porcentagem, setPorcentagem] = useState([])

    async function getData(){
        try{
            await fetch('http://localhost:3001/getData',{
                method: 'GET'
            })
            .then(response=>response.json())
            .then(data=>{
                // console.log(JSON.stringify(data,null,2))
               
                // console.log(data)
                setDados(data)
            })
            .catch(err=>{
                console.log("ERO: "+err)
            })
        }   
        catch(err){
            console.log("Erro to fetch: "+err)
        }

    }
    useEffect(()=>{
        console.log("PEGANDO TODOS OS DADOS")
        

        getData()
        
    }, [])

    var arrayNames = new Array()
    var arrayPorcent = new Array()
    arrayNames.push(dados.map(data=>`${data.name}`))
    // arrayParticipation.push(dados.map(data=>data.participation))
    var totalValue = 0
    
    dados.map((data, indice) =>{
        totalValue += data.participation
    })

    dados.map(data=>{
        arrayPorcent.push(
            (data.participation * 100 / totalValue).toFixed(2)
        )
    })


    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: dados.map(data=>data.name),
        datasets: [
          {
            label: '% De participação',
            data: arrayPorcent,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            //   'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <>
        <div className={styles.content}>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Participation</th>
                    </tr>
                </thead>
                <tbody>
                    {dados ?
                    dados.map((data, index)=>(
                        <tr>
                            <td scope="row">{data.name}</td>
                            <td>{data.lastName}</td>
                            <td>{arrayPorcent[index]}%</td>
                        </tr>
                    ))
                    : "NAO TEM DADOS"}
                </tbody>
            </table>
            <div className={styles.graph}>
                <h1>Gráfico de participações </h1>
                <Doughnut data={data} options={{ responsive: true }} width={'400'} height={'200'}/>
            </div>
        </div>
        </>
    )
}

export default Table