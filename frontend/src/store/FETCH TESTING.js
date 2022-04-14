// FETCH REQUESTS FOR BOOKINGS

// NOTE GET
fetch('/api/bookings/').then(res => res.json()).then(data => console.log(data));


// NOTE POST
fetch('/api/bookings/', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": `cIWgSMO6-pmY8Q5puvY6xzmo5TF5Si4o8PIw`
    },
    body: JSON.stringify({
        userId: 1,
        listingId: 3,
        startDate: '2022-04-25',
        endDate: '2022-05-01',
        numGuests: 1
    })
}).then(res => res.json()).then(data => console.log(data));



// NOTE DELETE
fetch('/api/bookings/:bookingId', {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": `cIWgSMO6-pmY8Q5puvY6xzmo5TF5Si4o8PIw`
    }
}).then(res => res.json()).then(data => console.log(data));