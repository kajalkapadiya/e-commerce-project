import { Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="d-flex align-items-center flex-column">
        <Button variant="outline-primary" style={{ width: "max-content" }}>
          Get our Latest Album
        </Button>
        <Button variant="outline-primary mt-3" style={{ width: "max-content" }}>
          ►
        </Button>
      </div>
      <section id="tours" className="container">
        <table className="table">
          <thead>
            <tr>
              <th>TOURS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JUL 16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <button className="btn btn-outline-primary">BUY TICKETS</button>
              </td>
            </tr>
            <tr>
              <td>JUL 19</td>
              <td>TORONTO,ON</td>
              <td>BUDWEISER STAGE</td>
              <td>
                <button className="btn btn-outline-primary">BUY TICKETS</button>
              </td>
            </tr>
            <tr>
              <td>JUL 22</td>
              <td>BRISTOW, VA</td>
              <td>JIGGY LUBE LIVE</td>
              <td>
                <button className="btn btn-outline-primary">BUY TICKETS</button>
              </td>
            </tr>
            <tr>
              <td>JUL 29</td>
              <td>PHOENIX, AZ</td>
              <td> AK-CHIN PAVILION</td>
              <td>
                <button className="btn btn-outline-primary">BUY TICKETS</button>
              </td>
            </tr>
            <tr>
              <td>AUG 2</td>
              <td>LAS VEGAS, NV</td>
              <td>T-MOBILE ARENA</td>
              <td>
                <button className="btn btn-outline-primary">BUY TICKETS</button>
              </td>
            </tr>
            <tr>
              <td>AUG 7</td>
              <td>CONCORD, CA</td>
              <td> CONCORD PAVILION</td>
              <td>
                <button className="btn btn-outline-primary">BUY TICKETS</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Home;
