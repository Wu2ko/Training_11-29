import {Form, Button, Card} from "react-bootstrap";

const Ieskoti =()=>{
    return(
        <Card>
        <h3> search component</h3>
        <form>
            <Form.Group className="">
                <Form.Label>Enter desired breed:</Form.Label>
                <Form.Control className=""type="text" placeholder="...siamese"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Button type="submit" className="mt-1">Show it</Button>
            </Form.Group>

        </form>
        </Card>
    )

}

export default Ieskoti