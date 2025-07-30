import './App.css'
import Grid from '@mui/material/Grid2' 
import HydrologyTable from './components/HydrologyTable'
import Student from './components/Student'

// PENDIENTE: Cree la interfaz
import DataHour from './interface/DataHour'
import React, { useState, useEffect } from 'react';

function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/CELEC/hidrologia_17122024.json"
  
  // PENDIENTE: Variable de estado y la función de modificación. 

  const [data, setData] = useState<DataHour[]>([]);
  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON.
  
  // Al recibir la respuesta, actualice la variable de estado.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: DataHour[] = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]); 


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student
            names="David Salomon"
            lastNames="Sumba Correa"
            parallel="1"

          />

        </Grid>
        
        {/* HydrologyTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <HydrologyTable data={ data}></HydrologyTable>
        
        </Grid>
        
       
    </Grid>
  )
}


export default App
