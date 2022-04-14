import CloseIcon from '@mui/icons-material/Close';
import './SeeBookingsModal.css'
import dayjs from "dayjs";

const SeeBookingsModal = ({ bookings, setShowModal }) => {
    return (
        <div id="see_bookings_modal">
            <div id="bookings_header">
                <div></div>
                <div id="booking_title">Bookings</div>
                <div id="closeIcon" onClick={() => setShowModal(false)}><CloseIcon /></div>
            </div>
            {bookings.length ?
                <table id="bookings_list">
                    <thead>
                        <tr className="booking_item">
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Guests</th>
                        </tr>
                    </thead>
                    {bookings?.map(booking => {
                        return (
                            <tbody>
                                <tr className="booking_item">
                                    <td> {booking?.User?.username}</td>
                                    <td>
                                        {dayjs(booking?.startDate).format("MMM DD, YYYY")}
                                    </td>
                                    <td>  {dayjs(booking?.endDate).format("MMM DD, YYYY")} </td>
                                    <td>{booking?.numGuests}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
                : <div>No Bookings.</div>}
        </div>
    )
}

export default SeeBookingsModal;