import React from "react";
import './styles.css';
import ItemList from "../../components/ItemList";

import { useParams } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [loading, productos, error] = useFirebase(categoryId)
    return (
        <>
            {loading ? 
            <Spinner animation="border" role="status">
                <h2 className="visually-hidden load">Loading...</h2>
            </Spinner>
            :
            <ItemList products={productos} />}
            {error && <h2>{error}</h2>}
        </>
    )
};

export default ItemListContainer;