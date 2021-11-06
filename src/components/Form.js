import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const FormComponent = ({
    onSave,
    onUpdate,
    update,
    datosPelicula,
    onSetDatosPelicula

}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        if (update) {
            onUpdate(datosPelicula)
        } else {
            onSave(datosPelicula)
        }
        e.target.reset();
    }

    const onChange = (e) => {
        onSetDatosPelicula({
            ...datosPelicula,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Card style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" name='nombre' onChange={onChange} value={datosPelicula.nombre} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Género</Form.Label>
                        <Form.Control type="text" placeholder="Género" name='genero' onChange={onChange} value={datosPelicula.genero} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Director</Form.Label>
                        <Form.Control type="text" placeholder="Director" name='director' onChange={onChange} value={datosPelicula.director} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Form>
            </Card.Body>
        </Card>

    )
}

export default FormComponent
