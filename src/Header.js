function Header(props){
    // let name = "Shivani";
//    document.write(Object.getOwnPropertyNames(props));

    return(
        // <div id="headerdiv" className="this.props.className">
        //     <h1>Hey {props.name}! </h1>
        //     {/* <h1>Hey {props.className}! </h1> */}
        //     {/* <h2>Age: {props.age} {props.index}</h2> */}
        // </div>

        <div className="cards">
            <img src={props.image} className="card-image"/>
            
            <h2 className="card-title">
            {props.title}
            </h2>

            <p className="card-subtitle">
            {props.subtitle}
            </p>

            <p className="card-description">
            {props.description}
            </p>
            <button className="button">Learn More</button>
        </div>
    )

}

export default Header;