import { Badge, Card, Col } from "react-bootstrap";
import React from "react";
import Loader from "../frequentlyuse/loader";
import Styles from "../../styles/card.module.scss"
const CardList = ({results,isloading}) => { 
  /**
      * search box === value
      * const new array = result array.filter((el)=>el.name===search box)
      * console.log(newarray)
      */


   let display;
   
  if(results){ 
      
      display = results.map((item)=>{
          let {id ,image,name ,location,status} = item
          
           return (
           <>
           <Col className="mt-4" key={id} md={4}>
              {isloading ? <Loader />  : 
             <Card className={Styles.card}>
              <Card.Img
                variant="top"
                src={image}
              />


              <Card.Body className={ `${Styles.card_body} p-3 `}>
                  <Card.Text as='h4' className="pb-3">{name}</Card.Text>
                <Card.Text as="span" > Last location</Card.Text>
                <Card.Text as="h6" className="line"> {location.name} </Card.Text>
       
              </Card.Body>
                <div className={Styles.badge}>
                <Badge   bg={status === "Dead" ? 'danger' 
                : status === "Alive" ?
                 "success" : "secondary" 
                 }>
                      {status}
                </Badge> 
                </div>
            </Card>
               
      }
           </Col>
           
           </>) 
      })
  }
  else{
    display = "No Characters Found :/";
    }
   
  return (
    <>
      {display}
    </>
    
    
  );
};

export default CardList;
