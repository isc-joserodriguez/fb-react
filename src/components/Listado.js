import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'

const Listado = ({
    peliculas,
    initUpdate,
    onSetDatosPelicula,
    onDelete
}) => {
    const onUpdate = (values) => {
        console.log(values)
        initUpdate();
        onSetDatosPelicula(values)
    }

    return (
        <Card style={{ width: '20%', marginLeft: 'auto', marginRight: 'auto' }}>
            <h1>Lista</h1>
            <ListGroup variant="flush">
                {peliculas.map(pelicula => (
                    <ListGroup.Item key={pelicula.id}>
                        <Row>
                            <Col className="d-flex justify-content-end">
                                <Button variant="warning" onClick={() => onUpdate(pelicula)}>Editar</Button>
                                <Button variant="danger" onClick={() => onDelete(pelicula.id)}>Eliminar</Button>
                            </Col>
                        </Row>
                        Nombre: {pelicula.nombre}
                        <br />
                        Genero: {pelicula.genero}
                        <br />
                        Director: {pelicula.director}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    )
}

export default Listado
