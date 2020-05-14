import React, { useEffect, useState } from 'react';
import {
    Col,
    Button,
    Form,
    Modal,
    Spinner
} from 'react-bootstrap';
import { configConstants } from 'js/constants';
import { facebookApi } from 'js/services';
import { omit } from 'lodash';



export const UpdatePageInfo = (props) => {
    const [state, setState] = useState({});
    const { is_open, hide, callBack } = props;
    const [loading, setLoading] = useState(false);

    const lookups = {
        100431685016074: configConstants.PAGE_FOOTBALL_TOKEN,
        100693374989694: configConstants.PAGE_CREATIVE_TOKEN,
        106269047757837: configConstants.PAGE_ENTERTAINMENT_TOKEN,
        108130480903091: configConstants.PAGE_MAKE_TOKEN,
    }

    useEffect(() => {
        setState((state) => ({
            ...state,
            ...props.data
        }))
    }, []);


    const onSubmit = () => {
        setLoading(true);
        facebookApi.update(props.data.id, lookups[props.data.id], {
            ...omit(state, 'id', 'name'),
            access_token: lookups[props.data.id]
        }).then(() => {
            setLoading(false);
            callBack();
        }).catch(() => setLoading(false));
    }

    return (
        <div>
            <Modal
                show={is_open}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={hide}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Page Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Page Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.name || ''}
                                    onChange={(value) => setState({
                                        ...state,
                                        name: value.target.value
                                    })}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>About</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.about || ''}
                                    onChange={(value) => setState({
                                        ...state,
                                        about: value.target.value
                                    })}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Bio</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.bio || ''}
                                    onChange={(value) => setState({
                                        ...state,
                                        bio: value.target.value
                                    })}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.phone || ''}
                                    onChange={(value) => setState({
                                        ...state,
                                        phone: value.target.value
                                    })}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.description || ''}
                                    onChange={(value) => setState({
                                        ...state,
                                        description: value.target.value
                                    })}
                                />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: 'center' }}>
                    <Button onClick={onSubmit}>{loading ?
                        <Spinner as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true" /> : 'Submit'}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
