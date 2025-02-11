import "./ViewOffers.css"


const redbus={
    "bus":[
        {
            para : "FLAT",
            number:"5%",
            head:"View Details",
            bgColor: "linear-gradient(260.04deg, rgb(183, 248, 219) 0%, rgb(80, 167, 194) 100%)",
        },
        
        {
            para : "INSTANT",
            number:"200",
            head:"View Details",
            bgColor: "linear-gradient(247.67deg, rgb(255, 220, 171) -7.22%, rgb(206, 119, 0) 83.33%)",  
        },
        {
            para : "FLAT",
            number:"500",
            head:"View Details",
            bgColor:"linear-gradient(80.04deg, rgb(77, 49, 176) 0%, rgb(229, 179, 179) 100%)",         
        },
        {
            para : "FLAT",
            number:"1000",
            head:"View Details",
            bgColor:"linear-gradient(258.38deg, rgb(255, 134, 122) 2.88%, rgb(255, 129, 119) 2.88%, rgb(177, 42, 91) 103.25%)",
        }
    ]
}



function ViewOffers() {
  return (
    <div className="four" >
        {
        redbus.bus.map((b) =>{
            return(
            <div style={{background: b.bgColor, width:"200px",height:"115px",borderRadius:"9px"}}  >
                <p className="one">{b.para}</p>
                <p className="two">{b.number}</p>
                <p className="three">{b.head}</p>
            </div>
            )
        })
        }
    </div>
  )
}

export default ViewOffers;