export function LocationMap() {
  return (
    <div className="w-full bg-sage-soft border border-line rounded-sm overflow-hidden aspect-[21/9] min-h-[300px]">
      {/* 
        Menggunakan iframe statis Google Maps. 
        Karena ini alamat contoh/dummy, kita pakai embed peta area Jakarta Selatan secara umum.
      */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.0837096696!2d106.71967676648757!3d-6.2842060193496035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec56df8897%3A0x6b8ec5233bc508f7!2sKec.%20Cilandak%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1720231920000!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Studio SWARAS Interior"
      />
    </div>
  );
}
