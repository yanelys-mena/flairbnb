

fetch('/api/listings/105/update-listing', {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": `v1xmhE69-t-W-0whfgeTkxlCKimBRc0NY8q8`
    },
    body: JSON.stringify({
        userId: 1,
        name: 'ORANGE',
        listingType: 'entire apt',
        guests: '4',
        beds: '3',
        bedrooms: '4',
        bathrooms: '1',
        description: 'my updated description',
        address: 'halloway manner',
        city: 'jordan',
        state: 'hillside',
        country: 'Puerto Rico',
        lat: 500,
        lng: 500,
        price: 600.00
    })
}).then(res => res.json()).then(data => console.log(data));

