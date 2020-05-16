import React, { useEffect, useState } from 'react';
import { Table, Card, Button } from 'react-bootstrap';
import { configConstants } from 'js/constants';
import { facebookApi } from 'js/services';
import { forEach, isEmpty } from 'lodash';
import { useModal } from 'js/hooks';
import { FaFacebook, FaCheck } from 'react-icons/fa';


export const Dashboard = () => {
    const [show, hide] = useModal();
    const [page_info, setPageInfo] = useState([]);

    const fetch_data = [
        { page_id: configConstants.PAGE_FOOTBALL_ID, access_token: configConstants.PAGE_FOOTBALL_TOKEN },
        { page_id: configConstants.PAGE_CREATIVE_ID, access_token: configConstants.PAGE_CREATIVE_TOKEN },
        { page_id: configConstants.PAGE_ENTERTAINMENT_ID, access_token: configConstants.PAGE_ENTERTAINMENT_TOKEN },
        { page_id: configConstants.PAGE_MAKE_ID, access_token: configConstants.PAGE_MAKE_TOKEN }
    ]

    useEffect(() => {
        getPagesDetails(fetch_data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getPagesDetails = async (data) => {
        let facebook_page_information_array = [];

        let response = await Promise.all(data.map(item => getInfoPage(item)));

        forEach(response, (item) => {
            facebook_page_information_array.push(item);
        });

        setPageInfo(facebook_page_information_array);
    }

    const getInfoPage = (item) => {
        return new Promise(async (resolve) => {
            facebookApi.getAll(item.page_id, {
                fields: 'about,bio,description,phone,name',
                access_token: item.access_token
            })
            .then((response) => resolve(response.data))
            .catch((err) => console.log('promise back error', err));
        });
    }

    return (
        <Card>
            <Card.Header className='table-heading'>Listings</Card.Header>
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Page Name</th>
                        <th>About</th>
                        <th>Bio</th>
                        <th>Description</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !isEmpty(page_info) && page_info.map((item, index) => (
                            <tr key={index + item.name}>
                                <td><FaFacebook size="2em" /></td>
                                <td>{item.name ? item.name : ''}</td>
                                <td>{item.about ? item.about : ''}</td>
                                <td>{item.bio ? item.bio : ''}</td>
                                <td>{item.description ? item.description : ''}</td>
                                <td>{item.phone ? item.phone : ''}</td>
                                <td><FaCheck color="green" size="1.3em" /></td>
                                <td>
                                    <Button
                                        size="sm"
                                        onClick={() =>
                                            show('UpdatePageInfo', {
                                                callBack: () => {
                                                    getPagesDetails(fetch_data);
                                                    hide('UpdatePageInfo');
                                                },
                                                data: item
                                            })
                                        }
                                    >Update
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Card>
    )
}