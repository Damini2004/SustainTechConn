
export function MapSection() {
    return (
        <section id="map" aria-label="map-container" className="h-[400px] md:h-[500px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.971960256801!2d-81.46767498888496!3d28.41400497568581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77e35b342467d%3A0x1d31d4285d15c753!2sOrange%20County%20Convention%20Center!5e0!3m2!1sen!2sus!4v1719590059531!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location Map"
            ></iframe>
        </section>
    );
}
