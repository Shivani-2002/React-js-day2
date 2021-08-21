import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react';

function App() {

  // const headerData=["Home","About","Contact"];
  // let [name,setNam] = useState("Shiva");

  // function changeName(){
  //   setNam("shi");
  // }

  const array=[
    {title:"HTML",
    subtitle:"HyperText Markup Language is the standard markup language for Web pages.",description:"HTML is the set of markup symbols or codes inserted into a file intended for display on the Internet. The markup tells web browsers how to display a web page's words and images.",image:"https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"},
   
    {title:"CSS",
    subtitle:"Cascading Style Sheets is the language used to describe the layout of websites.",description:"It is most commonly used in the development of web pages and user interfaces of online applications and any type of XML document can use CSS.",image:"https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"},
    
    {title:"JS",
    subtitle:"JavaScript is used to improve the dynamics of a particular page.",
    description:"It is a Scripting language and is mainly used for validation purposes and helps us to execute complex actions and also enables the interaction of websites with visitors.",
    image:"https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-javascript/sta-je-javascript.jpg"},
    
    {title:"React JS",
    subtitle:"React is a free and open-source front-end JavaScript library .",
    description:"It is maintained by Facebook. Its used for building user interfaces or UI components and can be used as a base in the development of single-page or mobile applications.",
    image:"https://lh4.googleusercontent.com/sBaxDLU9jP8BOaB8vNld8Yu_dv7V3HZGBNBHiguET93-VXWxm1tO3J6PtAWEg46cBAicYGZtZEMwRdYO3NYJUKBrEIT18-KvRUAMIHzQ_Q1sagcKZa3hyKVR4hJaf4VpTV3hoAoa"},
    
    {title:"Node JS",
    subtitle:"Its used for non-blocking, event-driven servers, due to its single-threaded nature.",
    description:"It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures. It can be used in both the frontend and backend of applications.",image:"https://www.htmlpro.net/blog/wp-content/uploads/2019/11/1200px-Node.js_logo.svg_.png"}]

  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Web Development</h1>
      {/* <h1>{name}</h1>
      <button onClick={changeName}>Click me</button>
      <h2>{name}</h2> */}
      {/* <div >
        <Header age="19" name="Shivu"/>
        <Header age="19" name="Sana"/> 
        {
          headerData.map((data,index) => (
            <Header name={data} index={index}/>
          ))
        }
         <Header className="Header1"/>
        <Header name="Shivu"/> 
         <p>HI</p>
      </div> */}

     

      <div className="card-container">
      {
          array.map((data,index) => (
            <Header key={index} image={data.image} title={data.title} subtitle={data.subtitle} description={data.description}/>
          ))
        }
      </div>
      
     

      {/* <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div id="footer"><Footer/></div>

      </header> */}
  

      

    </div>
  );
}

export default App;
