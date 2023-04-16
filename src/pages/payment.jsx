import {Form, Button,} from "react-bootstrap";
export default function Payment(){
  return(
    <div className="d-flex align-items-center justify-content-center" style={{ background: "black", height: "100vh" }}>
    <div>
    <h1 className="text-white text-center fw-semibold fs-1 mb-4">Premium</h1>
      <div>
        <p  className="text-white">Bayar sekarang dan nikmati streaming film-film yang kekinian dari <span className="text-danger fw-bold">DUMBFLIX</span></p>
        <p className="fw-bold text-center"><span className="text-danger fw-bold">DUMBFLIX</span> : 0981312323</p>
        <form className="d-flex flex-column align-items-center justify-content-center ">
          <Form.Group className="mb-3 d-flex " style={{width:"300px"}}>
              <Form.Control
                type="email"
                placeholder="Input Your Account Number"
                className="bg-dark text-white"
              />
          </Form.Group >
          <Form.Group className="mb-3" style={{width:"300px"}}>
            <Form.Control
              type="file"
              placeholder="Input Your Account Number"
              className="bg-light text-white"/>
          </Form.Group>
          <Button variant="danger" style={{width:"300px"}}>Kirim</Button>
        </form>
      </div>   
    </div>
    </div>
  )
}