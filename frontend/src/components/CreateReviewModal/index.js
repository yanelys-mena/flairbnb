import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateReviewForm from './CreateReviewForm';
import './CreateReview.css'

function CreateReviewModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id="addReviewButton" onClick={() => setShowModal(true)}>Add Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateReviewForm />

                </Modal>
            )}
        </>
    );
}

export default CreateReviewModal;