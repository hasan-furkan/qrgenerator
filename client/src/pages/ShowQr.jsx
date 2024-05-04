import { useEffect, useState } from "react";
import { getQr } from "../../services/qr";
import { toast } from "react-toastify";

export const ShowQr = ({ username }) => {
  const [qr, setQr] = useState([]);

  const handleGetQr = async () => {
    try {
      const response = await getQr();
      if (response && response.length > 0) {
        setQr(response);
      } else {
        toast.error("Failed to fetch QR Code");
      }
    } catch (error) {
      toast.error("Error fetching QR Codes");
    }
  };

  useEffect(() => {
    handleGetQr();
  }, [username]);

  return (
    <div className="flex flex-wrap">
      {qr &&
        qr.map((q, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              key={index}
              src={q.qr_code}
              alt={`QR Code ${q.name}`}
              class="rounded-full w-25 h-25"
            />
          </div>
        ))}
    </div>
  );
};
