import React,{useState} from "react";

export default function About(props) {
const [btnText, setBtnText] = useState("Enable Dark Mode");
const [myStyle, setMyStyle] = useState(
 {
    color : 'black',
    backgroundColor : 'white'
})
const toggleStyle = ()=>{
    if (myStyle.color === 'black') {
        setMyStyle({
        color : 'white',
        backgroundColor : '#042743'
        })
    setBtnText("Enable Light mode")
}    
else{
    setMyStyle({
        color : 'black',
        backgroundColor : 'white'
    })
    setBtnText("Enable Dark mode")
    }
}

    return (
    <>
<div className="container" style={myStyle}>
    <h2 className="container">About Us</h2>
<div id="accordion">
<div className="card">
<div className="card-header" id="headingOne" style={myStyle}>
    <h5 className="mb-0">
    <button className="btn btn-link" style={myStyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Collapsible Group Item #1
    </button>
    </h5>
</div>
<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" style={myStyle}data-parent="#accordion">
    <div className="card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
</div>
</div>
<div className="card">
<div className="card-header" id="headingTwo" style={myStyle} >
    <h5 className="mb-0">
    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        Collapsible Group Item #2
    </button>
    </h5>
</div>
<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion" style={myStyle}>
    <div className="card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
</div>
</div>
<div className="card">
<div className="card-header" id="headingThree" style={myStyle}>
    <h5 className="mb-0">
    <button className="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Collapsible Group Item #3
    </button>
    </h5>
</div>
<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion" style={myStyle}>
    <div className="card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
</div>
</div>
</div>
</div>
<div className="container">
<button class="btn btn-dark mx-3 my-2" type="button" onClick={toggleStyle} style={{borderColor:'black'?'white':'black' }}>{btnText}</button>
</div>
    </>
  );
}
