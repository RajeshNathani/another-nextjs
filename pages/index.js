import Link from 'next/link'
import Navbar from './Navbar'
import Head from 'next/head'
var c_name= 'USA'


const index = (props) => {
  return (
    
    <div>
        <Head>
          <link href='https://bootswatch.com/4/darkly/bootstrap.min.css' rel='stylesheet'></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <Navbar></Navbar>
        <div className='container'> <br></br>
          <h1 className='heading-3'>Get Country Info</h1> <br></br>
          <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Country Name" id='name' aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" onClick={handler} type="button"><i className='fa fa-search'></i> </button>
              </div>
          </div>
          <div className='jumbotron'>
            <p id='nam'></p> <img src='' id='flag' height='10vh'></img>
            <p id='capital' className='lead'></p>
            <p id='region' className='lead'></p>
            <p id='sub' className='lead'></p>
            <p id='lang' className='lead'></p>
            <p id='area' className='lead'></p>
            <p id='time' className='lead'></p>
            <p id='pop' className='lead'></p>
          </div>
    </div></div>
  )
}
const handler = async()=>{
  c_name = document.getElementById("name").value;
  console.log(c_name)
    const res = await fetch('https://restcountries.eu/rest/v2/name/'+c_name+'?fullText=true')
    const data = await res.json();
    document.getElementById("nam").innerHTML="<b>Name: </b>"+data[0].nativeName
    document.getElementById("capital").innerHTML="<b>Capital: </b>"+data[0].capital
    document.getElementById("region").innerHTML="<b>Region: </b>"+data[0].region
    document.getElementById("sub").innerHTML="<b>Subregion: </b>"+data[0].subregion
    document.getElementById("area").innerHTML="<b>Area: </b>"+data[0].area + "sq km."
    document.getElementById("time").innerHTML="<b>Timezone: </b>"+data[0].timezones[0]
    document.getElementById("lang").innerHTML="<b>Languages: </b>"+data[0].languages[0].name + "/" + data[0].languages[0].nativeName
    document.getElementById("pop").innerHTML="<b>Population: </b>"+data[0].population
    document.getElementById("flag").src = data[0].flag
}
export default index;
