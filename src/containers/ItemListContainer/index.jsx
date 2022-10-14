import React from "react";
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
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            :
            <ItemList products={productos} />}
            {error && <h2>{error}</h2>}
        </>
    )
};

export default ItemListContainer;