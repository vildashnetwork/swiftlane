// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Loader2, Download } from "lucide-react";
// import { useParams } from "react-router-dom";

// // Package type
// interface Package {
//     pieceType: string;
//     description: string;
//     dimensions?: string;
//     weight: string;
//     quantity: string;
// }

// // Shipment History type
// interface History {
//     date: string;
//     time: string;
//     location?: string;
//     status: string;
//     updatedBy: string;
//     remarks?: string;
// }

// // Shipment type matching Mongoose schema
// interface Shipment {
//     trackingNumber: string;
//     shipperName: string;
//     shipperAddress: string;
//     receiverName: string;
//     receiverAddress: string;
//     status: "Processing" | "In Transit" | "Out for Delivery" | "Delivered";
//     origin: string;
//     destination: string;
//     carrier?: string;
//     shipmentType?: "Truckload" | "Air" | "Ocean" | "Road" | "Express";
//     packageCount?: string;
//     weight?: string;
//     shipmentMode?: string;
//     carrierReferenceNo?: string;
//     productName?: string;
//     quantity?: string;
//     paymentMode?: "Cash" | "Bank" | "Venmo" | "Credit Card" | "PayPal";
//     freightCost?: string;
//     expectedDeliveryDate?: string;
//     departureTime?: string;
//     pickupDate?: string;
//     pickupTime?: string;
//     comments?: string;
//     packages?: Package[];
//     history?: History[];
// }

// export default function TrackingPage() {
//     const params = useParams<{ id: string }>();
//     const [code, setCode] = useState<string>("");
//     const [shipment, setShipment] = useState<Shipment | null>(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");


//     const fetchShipment = async () => {
//         if (!code.trim()) {
//             setError("Please enter a tracking code");
//             return;
//         }
//         setLoading(true);
//         setError("");
//         setShipment(null);
//         try {
//             const res = await axios.get(`http://localhost:1200/api/track/${code}`);
//             setShipment(res.data.shipment);
//         } catch (err: any) {
//             setError(err?.response?.data?.error || "Failed to fetch shipment");
//         } finally {
//             setLoading(false);
//         }
//     };
//     useEffect(() => {
//         if (params.id) {
//             setCode(params.id);
//             fetchShipment();
//         }
//     }, [params.id])

//     const statusColor = (s: string) => {
//         switch (s) {
//             case "Delivered":
//                 return "bg-green-100 text-green-700";
//             case "In Transit":
//                 return "bg-blue-100 text-blue-700";
//             case "Out for Delivery":
//                 return "bg-orange-100 text-orange-700";
//             default:
//                 return "bg-gray-100 text-gray-700";
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-16">
//             {/* Header */}
//             <div className="text-center mb-12">
//                 <h1 className="text-4xl font-bold text-gray-800">Track Your Shipment</h1>
//                 <p className="text-gray-500 mt-2">Enter your tracking code to see the details.</p>
//             </div>

//             {/* Input */}
//             <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
//                 <Input
//                     placeholder="Enter Tracking Code"
//                     className="max-w-md"
//                     value={code}
//                     onChange={(e) => setCode(e.target.value)}
//                 />
//                 <Button onClick={fetchShipment} disabled={loading}>
//                     {loading && <Loader2 className="animate-spin h-4 w-4 mr-2" />}
//                     Track
//                 </Button>
//             </div>

//             {error && (
//                 <p className="text-red-600 text-center mb-6 font-semibold">{error}</p>
//             )}

//             {shipment && (
//                 <div className="space-y-6">
//                     {/* Shipment Summary */}
//                     <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6 border-l-8 border-blue-600">
//                         <div>
//                             <p className="text-gray-400 font-semibold">Tracking Number</p>
//                             <h2 className="text-2xl font-bold text-gray-800">{shipment.trackingNumber}</h2>
//                         </div>
//                         <div>
//                             <p className="text-gray-400 font-semibold">Status</p>
//                             <Badge className={statusColor(shipment.status)}>{shipment.status}</Badge>
//                         </div>
//                         <div>
//                             <p className="text-gray-400 font-semibold">Expected Delivery</p>
//                             <p className="text-gray-700">{shipment.expectedDeliveryDate || "-"}</p>
//                         </div>
//                         <div>
//                             <Button
//                                 size="sm"
//                                 variant="outline"
//                                 onClick={() => window.open(`http://localhost:1200/api/track/${shipment.trackingNumber}/pdf`, "_blank")}
//                             >
//                                 <Download className="mr-2 h-4 w-4" /> PDF
//                             </Button>
//                         </div>
//                     </div>

//                     {/* Shipper & Receiver */}
//                     <div className="grid md:grid-cols-2 gap-6">
//                         <div className="bg-white shadow rounded-lg p-6 border-l-4 border-indigo-600">
//                             <h3 className="font-bold text-gray-700 mb-2">Shipper</h3>
//                             <p className="text-gray-600 font-semibold">{shipment.shipperName}</p>
//                             <p className="text-gray-500">{shipment.shipperAddress}</p>
//                         </div>
//                         <div className="bg-white shadow rounded-lg p-6 border-l-4 border-green-600">
//                             <h3 className="font-bold text-gray-700 mb-2">Receiver</h3>
//                             <p className="text-gray-600 font-semibold">{shipment.receiverName}</p>
//                             <p className="text-gray-500">{shipment.receiverAddress}</p>
//                         </div>
//                     </div>

//                     {/* Package Details */}
//                     <div className="bg-white shadow rounded-lg p-6">
//                         <h3 className="font-bold text-gray-700 mb-4">Package Details</h3>
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full text-left border border-gray-200">
//                                 <thead className="bg-gray-100">
//                                     <tr>
//                                         <th className="px-4 py-2">Type</th>
//                                         <th className="px-4 py-2">Description</th>
//                                         <th className="px-4 py-2">Dimensions</th>
//                                         <th className="px-4 py-2">Weight</th>
//                                         <th className="px-4 py-2">Qty</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {shipment.packages?.map((pkg, i) => (
//                                         <tr
//                                             key={i}
//                                             className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
//                                         >
//                                             <td className="px-4 py-2">{pkg.pieceType}</td>
//                                             <td className="px-4 py-2">{pkg.description}</td>
//                                             <td className="px-4 py-2">{pkg.dimensions || "-"}</td>
//                                             <td className="px-4 py-2">{pkg.weight}</td>
//                                             <td className="px-4 py-2">{pkg.quantity}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>

//                     {/* Shipment History Timeline */}
//                     <div className="bg-white shadow rounded-lg p-6">
//                         <h3 className="font-bold text-gray-700 mb-4">Shipment History</h3>
//                         <div className="space-y-4">
//                             {shipment.history?.map((h, i) => (
//                                 <div key={i} className="flex gap-4">
//                                     <div className="flex flex-col items-center">
//                                         <div className="w-4 h-4 rounded-full bg-blue-600 mt-1"></div>
//                                         {i !== shipment.history.length - 1 && (
//                                             <div className="w-0.5 flex-1 bg-gray-300 mt-1"></div>
//                                         )}
//                                     </div>
//                                     <div className="flex-1">
//                                         <p className="font-semibold text-gray-700">{h.status}</p>
//                                         <p className="text-gray-500 text-sm">
//                                             {h.date} {h.time} - {h.location || "Unknown location"}
//                                         </p>
//                                         {h.remarks && (
//                                             <p className="text-gray-400 text-sm">Remarks: {h.remarks}</p>
//                                         )}
//                                         <p className="text-gray-400 text-sm">Updated By: {h.updatedBy}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }















import { useState, useEffect } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Download } from "lucide-react";
import { useParams } from "react-router-dom";

interface Package {
    pieceType: string;
    description: string;
    dimensions?: string;
    weight: string;
    quantity: string;
}

interface History {
    date: string;
    time: string;
    location?: string;
    status: string;
    updatedBy: string;
    remarks?: string;
}

interface Shipment {
    trackingNumber: string;
    shipperName: string;
    shipperAddress: string;
    receiverName: string;
    receiverAddress: string;
    status: "Processing" | "In Transit" | "Out for Delivery" | "Delivered";
    expectedDeliveryDate?: string;
    packages?: Package[];
    history?: History[];
}

export default function TrackingPage() {
    const params = useParams<{ id: string }>();
    const [code, setCode] = useState<string>(params.id || "");
    const [shipment, setShipment] = useState<Shipment | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchShipment = async () => {
        if (!code.trim()) {
            setError("Please enter a tracking code");
            return;
        }
        setLoading(true);
        setError("");
        setShipment(null);
        try {
            const res = await axios.get(`http://localhost:1200/api/track/${code}`);
            setShipment(res.data.shipment);
        } catch (err: any) {
            setError(err?.response?.data?.error || "Failed to fetch shipment");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (params.id) fetchShipment();
    }, [params.id]);

    const statusColor = (status: string) => {
        switch (status) {
            case "Delivered":
                return "bg-green-100 text-green-700";
            case "In Transit":
                return "bg-blue-100 text-blue-700";
            case "Out for Delivery":
                return "bg-orange-100 text-orange-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Track Your Shipment</h1>
                <p className="text-gray-500 mt-2">Enter your tracking code to see the details.</p>
            </div>

            {/* Tracking Input */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 max-w-lg mx-auto">
                <Input
                    placeholder="Enter Tracking Code"
                    className="flex-1"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && fetchShipment()}
                />
                <Button
                    onClick={fetchShipment}
                    disabled={loading}
                    className="flex items-center justify-center"
                >
                    {loading && <Loader2 className="animate-spin h-4 w-4 mr-2" />}
                    Track
                </Button>
            </div>

            {error && (
                <p className="text-red-600 text-center mb-6 font-semibold">{error}</p>
            )}

            {/* Shipment Details */}
            {shipment && (
                <div className="space-y-6 max-w-6xl mx-auto">
                    {/* Summary */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6 border-l-8 border-blue-600">
                        <div>
                            <p className="text-gray-400 font-semibold">Tracking Number</p>
                            <h2 className="text-2xl font-bold text-gray-800">{shipment.trackingNumber}</h2>
                        </div>
                        <div>
                            <p className="text-gray-400 font-semibold">Status</p>
                            <Badge className={statusColor(shipment.status)}>{shipment.status}</Badge>
                        </div>
                        <div>
                            <p className="text-gray-400 font-semibold">Expected Delivery</p>
                            <p className="text-gray-700">{shipment.expectedDeliveryDate || "-"}</p>
                        </div>
                        <div>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                    window.open(
                                        `http://localhost:1200/api/track/${shipment.trackingNumber}/pdf`,
                                        "_blank"
                                    )
                                }
                            >
                                <Download className="mr-2 h-4 w-4" /> PDF
                            </Button>
                        </div>
                    </div>

                    {/* Shipper & Receiver */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white shadow rounded-lg p-6 border-l-4 border-indigo-600">
                            <h3 className="font-bold text-gray-700 mb-2">Shipper</h3>
                            <p className="text-gray-600 font-semibold">{shipment.shipperName}</p>
                            <p className="text-gray-500">{shipment.shipperAddress}</p>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 border-l-4 border-green-600">
                            <h3 className="font-bold text-gray-700 mb-2">Receiver</h3>
                            <p className="text-gray-600 font-semibold">{shipment.receiverName}</p>
                            <p className="text-gray-500">{shipment.receiverAddress}</p>
                        </div>
                    </div>

                    {/* Packages */}
                    <div className="bg-white shadow rounded-lg p-6 overflow-x-auto">
                        <h3 className="font-bold text-gray-700 mb-4">Package Details</h3>
                        <table className="min-w-full text-left border border-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Description</th>
                                    <th className="px-4 py-2">Dimensions</th>
                                    <th className="px-4 py-2">Weight</th>
                                    <th className="px-4 py-2">Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shipment.packages?.map((pkg, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                        <td className="px-4 py-2">{pkg.pieceType}</td>
                                        <td className="px-4 py-2">{pkg.description}</td>
                                        <td className="px-4 py-2">{pkg.dimensions || "-"}</td>
                                        <td className="px-4 py-2">{pkg.weight}</td>
                                        <td className="px-4 py-2">{pkg.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* History */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="font-bold text-gray-700 mb-4">Shipment History</h3>
                        <div className="space-y-4">
                            {shipment.history?.map((h, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-4 h-4 rounded-full bg-blue-600 mt-1"></div>
                                        {i !== shipment.history.length - 1 && (
                                            <div className="w-0.5 flex-1 bg-gray-300 mt-1"></div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-700">{h.status}</p>
                                        <p className="text-gray-500 text-sm">
                                            {h.date} {h.time} - {h.location || "Unknown location"}
                                        </p>
                                        {h.remarks && <p className="text-gray-400 text-sm">Remarks: {h.remarks}</p>}
                                        <p className="text-gray-400 text-sm">Updated By: {h.updatedBy}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
