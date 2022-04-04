import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

import SideMenu from "../presentation/sideMenu";
import Card from "../presentation/card";
import Pagination from "../presentation/pagination";
import SearchBtn from "../presentation/searchbar";
import species from '../category/species'

const Character = () => {

  const [pagenumber, setPageNumber] = useState(1);
  const [apiresults, setResult] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")


  const api = `https://rickandmortyapi.com/api/character/?page=${pagenumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  

  
   
  //  destrucuring for pagiantion
  let { info, results } = apiresults;





  useEffect(() => {
    (async function () {
      try {
        setIsloading(true);
        const res = await axios.get(api);
        setResult(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    })();
  }, [api]);

  return (
    <>
      <Container className="mt-5">
        {/* search   */}

        <Row>
          <Col>
            <SearchBtn
              setPageNumber={setPageNumber}
              search={search}
              results={results}
              setSearch={setSearch}

            />
          </Col>
        </Row>

        <Row>


          {/* side menu  grid */}

          <SideMenu
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setGender={setGender}
            setSpecies={setSpecies}
            setResult={setResult}
            apiresults={apiresults}
          />

          {/* col all cards grid   */}
          <Col md={9}>
            <Row>
              <Card results={results} isloading={isloading} />
            </Row>
          </Col>

          {/* pagination call here  */}



        </Row>

        <Pagination
          pagenumber={pagenumber}
          setPageNumber={setPageNumber}
          info={info}
        />
      </Container>
    </>
  );
};

export default Character;
