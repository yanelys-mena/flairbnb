import CloseIcon from '@mui/icons-material/Close';
import './SeeBookingsModal.css'


const SeeBookingsModal = ({ bookings, setShowModal }) => {
    return (
        <div id="see_bookings_modal">
            <div id="bookings_header">
                <div id="closeIcon" onClick={() => setShowModal(false)}><CloseIcon /></div>
            </div>
            <div id="bookings_list">
                {bookings?.map(booking => {
                    <div id="booking_item">
                        {booking?.listingId}
                        {booking?.startDate}
                        {booking?.endDate}

                    </div>
                })}
            </div>
        </div>
    )
}

export default SeeBookingsModal;