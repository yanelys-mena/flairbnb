import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateReviewForm from './CreateReviewForm';
import './CreateReview.css'

function CreateReviewModal({ sessionId, listingId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id="addReviewButton" onClick={() => setShowModal(true)}>Add Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateReviewForm sessionId={sessionId} listingId={listingId} />

                </Modal>
            )}
        </>
    );
}

export default CreateReviewModal;