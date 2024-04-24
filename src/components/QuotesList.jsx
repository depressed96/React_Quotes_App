import { useEffect,useState } from "react";
import { Container,Row,Col,Card } from "react-bootstrap";

const QuotesList =()=>{
   const [quotesList,setQuotesList] = useState([]);
   
   // works on intial rendering
   useEffect(()=>{
         async function getQuotes(){
            const response = await fetch('https://dummyjson.com/quotes');
            const responseJson = await response.json();
            console.log('api response ',responseJson)
            setQuotesList(responseJson.quotes);
         }
         getQuotes();
   },[])

   return (
    <Container>
        <Row>
            {
                quotesList.map((quote)=><Col xs={6}>
                    <Card style={{width:"600px",height:"150px",color:"white",marginTop:"20px",backgroundColor:"#133256"}}>
                        <Card.Title>{quote.author}</Card.Title>
                        <Card.Text style={{fontSize:"24px"}}>{quote.quote} </Card.Text>
                    </Card>
                </Col>)
            }
        </Row>
    </Container>
   )
}

export default QuotesList;
