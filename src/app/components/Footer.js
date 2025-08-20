export default function Footer() {
    return (
        <div className="grid grid-cols-3 mb-40 max-w-sm ml-auto">
            <div>
                <h3 className="font-bold">Offices</h3>
                <ul className="text-gray-500 font-medium">
                    <li>Dubai</li>
                    <li>London</li>
                    <li>Singapore</li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold">Advisory</h3>
                <ul className="text-gray-500 font-medium">
                    <li>Jets</li>
                    <li>Yachts</li>
                    <li>Real Estate</li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold">Contact</h3>
                <ul className="text-gray-500 font-medium">
                    <li>WhatsApp</li>
                    <li>Secure Email</li>
                    <li>Calendly</li>
                </ul>
            </div>
        </div>
    )
}