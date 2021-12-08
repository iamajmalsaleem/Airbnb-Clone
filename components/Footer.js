function Footer() {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb works</p>
                <p>News room</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p> 
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
                <p>Disaster relief housing</p>
                <p>Support Afghan refugees</p>
                <p>Celebrating diversity & belonging</p>
                <p>Combating discrimination</p>
                <p>Students Support</p> 
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
                <p>Try hosting</p>
                <p>AirCover: protection for Hosts</p>
                <p>Explore hosting resources</p>
                <p>Visit our community forum</p>
                <p>How to host responsibly</p> 
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Center</p>
                <p>Safety Information</p>
                <p>Cancellation options</p>
                <p>Supporting people with disabilities</p>
                <p>Report a neighbourhood concern</p> 
            </div>
        </div>
    )
}

export default Footer
