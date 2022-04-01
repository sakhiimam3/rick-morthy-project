import { useEffect, useState } from "react"
import { Container, Row, Col, } from "react-bootstrap"
import Card from "../presentation/card"
import Episodeside from "../presentation/episodeside"

const Location = () => {
  const [id, setId] = useState(1)
  const [isloading, setIsloading] = useState(false);
  const [results, setResults] = useState([])
  const [info, setInfo] = useState([])
console.log(info)
  let {  name,type } = info



  const api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    (async function () {
      try {
        setIsloading(true)
        let data = await fetch(api).then((res) => res.json())
        setInfo(data);
  
        let locationdata = await Promise.all(
          data.residents.map((x) => {
            return fetch(x).then((res) => res.json());
          })
        );
        setResults(locationdata);
      } catch (error) {
           console.log(error)
      }
      finally{
        setIsloading(false)
      }
     
    })();
  }, [api]);

  return (
    <>
      <section>
        <Container  className="mt-5">
          <Row>
            <h1 className="text-center mb-4">Location : <span className="text-primary"> {name}</span></h1>
              <h4 className="text-center mb-4"> <span className="text-primary"> Type : </span>  {type}</h4>
          </Row>
          {/* <h5 className="text-center"> Air-date :  {air_date}</h5> */}
          <Row>

          </Row>
          <Row>
            <Col md={3} xs={12}>
              <Episodeside name="episode"  pickup='Episode' setId={setId}  total={51}/>

            </Col>
            <Col md={9}>
              <Row>
                <Card results={results} isloading={isloading} />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Location
