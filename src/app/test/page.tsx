"use client";

import { useEffect, useState } from "react";

export default function LocationPage() {
  const [address, setAddress] = useState("Đang lấy địa chỉ...");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const LOCATIONIQ_KEY = "pk.795459d4decb370658e001c923b894c3"; // đổi thành key của bạn

  useEffect(() => {
    if (!navigator.geolocation) {
      setAddress("Trình duyệt không hỗ trợ định vị");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setCoords({ lat, lng });

        // Reverse geocoding với LocationIQ
        const res = await fetch(
          `https://us1.locationiq.com/v1/reverse?key=${LOCATIONIQ_KEY}&lat=${lat}&lon=${lng}&format=json`
        );

        const data = await res.json();

        const addr = data.address;

        const house = addr.house_number || "";
        const road = addr.road || "";
        const ward = addr.suburb || addr.neighbourhood || "";
        const district = addr.city_district || addr.county || "";
        const city = addr.city || addr.town || addr.village || "";
        const state = addr.state || "";
        const country = addr.country || "";

        const full = [
          house && `${house} `,
          road,
          ward && `, ${ward}`,
          district && `, ${district}`,
          city && `, ${city}`,
          state && `, ${state}`,
          country && `, ${country}`,
        ]
          .join("")
          .replace(/,\s*,/g, ",")
          .trim();

        setAddress(full || data.display_name);
      },
      (err) => {
        setAddress("Không thể lấy vị trí");
        console.error(err);
      }
    );
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📍 Địa chỉ hiện tại của bạn</h1>
      <p>{address}</p>

      {coords && (
        <div style={{ marginTop: 10 }}>
          <small>
            Lat: {coords.lat} – Lng: {coords.lng}
          </small>
        </div>
      )}
    </div>
  );
}
