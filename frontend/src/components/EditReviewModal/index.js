import './EditReview.css';
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';
import './EditReview.css'
import { FaEllipsisH } from 'react-icons/fa';


function EditReviewModal({ sessionId, listingId, review }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}> <FaEllipsisH className="editReview" /></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditReviewForm sessionId={sessionId} listingId={listingId} review={review} />

                </Modal>
            )}
        </>
    );
}

export default EditReviewModal;