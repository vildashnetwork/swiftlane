
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Loader2, Download } from "lucide-react";
// import { useParams } from "react-router-dom";

// interface Package {
//     pieceType: string;
//     description: string;
//     dimensions?: string;
//     weight: string;
//     quantity: string;
// }

// interface History {
//     date: string;
//     time: string;
//     location?: string;
//     status: string;
//     updatedBy: string;
//     remarks?: string;
// }

// interface Shipment {
//     trackingNumber: string;
//     shipperName: string;
//     shipperAddress: string;
//     receiverName: string;
//     receiverAddress: string;
//     status: "Processing" | "In Transit" | "Out for Delivery" | "Delivered";
//     expectedDeliveryDate?: string;
//     packages?: Package[];
//     history?: History[];
// }

// export default function TrackingPage() {
//     const params = useParams<{ id: string }>();
//     const [code, setCode] = useState<string>(params.id || "");
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
//             const res = await axios.get(`https://swiftlane-backend-pfmz.onrender.com/api/track/${code}`);
//             setShipment(res.data.shipment);
//         } catch (err: any) {
//             setError(err?.response?.data?.error || "Failed to fetch shipment");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (params.id) fetchShipment();
//     }, [params.id]);

//     const statusColor = (status: string) => {
//         switch (status) {
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

//             {/* Tracking Input */}
//             <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 max-w-lg mx-auto">
//                 <Input
//                     placeholder="Enter Tracking Code"
//                     className="flex-1"
//                     value={code}
//                     onChange={(e) => setCode(e.target.value)}
//                     onKeyDown={(e) => e.key === "Enter" && fetchShipment()}
//                 />
//                 <Button
//                     onClick={fetchShipment}
//                     disabled={loading}
//                     className="flex items-center justify-center"
//                 >
//                     {loading && <Loader2 className="animate-spin h-4 w-4 mr-2" />}
//                     Track
//                 </Button>
//             </div>

//             {error && (
//                 <p className="text-red-600 text-center mb-6 font-semibold">{error}</p>
//             )}

//             {/* Shipment Details */}
//             {shipment && (
//                 <div className="space-y-6 max-w-6xl mx-auto">
//                     {/* Summary */}
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
//                                 onClick={() =>
//                                     window.open(
//                                         `https://swiftlane-backend-pfmz.onrender.com/api/track/${shipment.trackingNumber}/pdf`,
//                                         "_blank"
//                                     )
//                                 }
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

//                     {/* Packages */}
//                     <div className="bg-white shadow rounded-lg p-6 overflow-x-auto">
//                         <h3 className="font-bold text-gray-700 mb-4">Package Details</h3>
//                         <table className="min-w-full text-left border border-gray-200">
//                             <thead className="bg-gray-100">
//                                 <tr>
//                                     <th className="px-4 py-2">Type</th>
//                                     <th className="px-4 py-2">Description</th>
//                                     <th className="px-4 py-2">Dimensions</th>
//                                     <th className="px-4 py-2">Weight</th>
//                                     <th className="px-4 py-2">Qty</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {shipment.packages?.map((pkg, i) => (
//                                     <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                                         <td className="px-4 py-2">{pkg.pieceType}</td>
//                                         <td className="px-4 py-2">{pkg.description}</td>
//                                         <td className="px-4 py-2">{pkg.dimensions || "-"}</td>
//                                         <td className="px-4 py-2">{pkg.weight}</td>
//                                         <td className="px-4 py-2">{pkg.quantity}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>

//                     {/* History */}
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
//                                         {h.remarks && <p className="text-gray-400 text-sm">Remarks: {h.remarks}</p>}
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
























import React, { useEffect, useState } from "react";
import axios from "axios";
import Barcode from "react-barcode";
import QRCode from "qrcode.react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Download, Copy, Share2 } from "lucide-react";
import { toast } from "react-hot-toast";

/*
  TrackingPage_Pro.jsx
  - A refined, professional tracking UI with barcode + QR code, timeline, and improved layout.
  - Tailwind CSS styling (assumes project already uses Tailwind).
  - Uses these additional npm packages: react-barcode, qrcode.react, framer-motion, react-hot-toast

  Installation (example):
  npm install react-barcode qrcode.react framer-motion react-hot-toast lucide-react

  Usage: drop this component into your routes. It expects the backend endpoint used earlier
  (https://swiftlane-backend-pfmz.onrender.com/api/track/:code) that returns { shipment }
*/

export default function TrackingPagePro({ initialId }: { initialId?: string }) {
  const [code, setCode] = useState<string>(initialId || "");
  const [shipment, setShipment] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchShipment = async (trackCode?: string) => {
    const search = (trackCode || code || "").trim();
    if (!search) {
      setError("Please enter a tracking code");
      return;
    }
    setLoading(true);
    setError("");
    setShipment(null);
    try {
      const res = await axios.get(`https://swiftlane-backend-pfmz.onrender.com/api/track/${search}`);
      setShipment(res.data.shipment);
    } catch (err: any) {
      setError(err?.response?.data?.error || "Failed to fetch shipment");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialId) fetchShipment(initialId);
  }, [initialId]);

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

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Tracking number copied");
    } catch (e) {
      toast.error("Unable to copy");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">Track Your Shipment</h1>
            <p className="text-slate-500 mt-1">Enter code to view shipment details, download manifest, or share tracking.</p>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex gap-3 items-center">
              <Input
                placeholder="Enter Tracking Code"
                className="max-w-sm"
                value={code}
                aria-label="tracking-code"
                onChange={(e: any) => setCode(e.target.value)}
                onKeyDown={(e: any) => e.key === "Enter" && fetchShipment()}
              />
              <Button onClick={() => fetchShipment()} disabled={loading} className="flex items-center">
                {loading ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : null}
                Track
              </Button>
            </div>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </div>
        </div>

        {/* Content */}
        {shipment ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left column: visual identity, barcode, qr, quick summary */}
            <aside className="lg:col-span-4 space-y-4">
              <div className="bg-white shadow rounded-xl p-6 border">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Tracking</p>
                    <h2 className="text-xl font-semibold text-slate-800">{shipment.trackingNumber}</h2>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className={`${statusColor(shipment.status)} px-3 py-1`}>{shipment.status}</Badge>
                      <p className="text-sm text-slate-500">{shipment.expectedDeliveryDate || "-"}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Button size="sm" variant="ghost" onClick={() => copyToClipboard(shipment.trackingNumber)}>
                      <Copy className="h-4 w-4 mr-2" />
                      <span className="text-sm">Copy</span>
                    </Button>
                  </div>
                </div>

                {/* Barcode block */}
                <div className="mt-6">
                  <div className="bg-gray-50 p-4 rounded-md flex items-center justify-center">
                    {/* react-barcode renders an SVG by default */}
                    <Barcode value={shipment.trackingNumber} format="CODE128" height={60} width={1.6} displayValue={false} />
                  </div>
                  <p className="mt-2 text-center text-xs text-slate-500">{shipment.trackingNumber}</p>
                </div>

                {/* QR + Actions */}
                <div className="mt-4 flex items-center gap-3 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-md shadow-sm">
                      <QRCode value={window.location.href.split('#')[0] + `#${shipment.trackingNumber}`} size={86} includeMargin={false} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Scan to Track</p>
                      <p className="text-xs text-slate-400">Shareable link & live updates</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Button size="sm" variant="outline" onClick={() => window.open(`https://swiftlane-backend-pfmz.onrender.com/api/track/${shipment.trackingNumber}/pdf`, "_blank") }>
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                    <Button size="sm" onClick={() => { navigator.share ? navigator.share({ title: `Track ${shipment.trackingNumber}`, url: window.location.href + `#${shipment.trackingNumber}` }) : toast('Sharing not supported on this device'); }}>
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                  </div>
                </div>

                {/* Summary mini stats */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="text-xs text-slate-400">Pieces</p>
                    <p className="font-medium text-slate-700">{shipment.packages ? shipment.packages.length : "-"}</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="text-xs text-slate-400">Weight</p>
                    <p className="font-medium text-slate-700">{shipment.packages?.reduce((s: any, p: any) => { const w = parseFloat(p.weight || 0); return s + (isNaN(w) ? 0 : w); }, 0) || "-"} kg</p>
                  </div>
                </div>
              </div>

              {/* Quick contact card */}
              <div className="bg-gradient-to-r from-indigo-600 to-sky-500 text-white rounded-xl p-4 shadow-md">
                <p className="text-sm opacity-90">Need help with this shipment?</p>
                <h3 className="text-lg font-semibold mt-2">Contact Operations</h3>
                <p className="text-sm mt-1 opacity-90">Phone:  +1 719-629-5764</p>
                <div className="mt-3">
                  <Button onClick={() => window.location.href = `tel: +1 719-629-5764`}>Call Now</Button>
                </div>
              </div>
            </aside>

            {/* Right column: details, packages, & timeline */}
            <main className="lg:col-span-8 space-y-6">
              {/* Shipper & Receiver */}
              <div className="bg-white shadow rounded-xl p-6 border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm text-slate-400">Shipper</h4>
                    <p className="font-semibold text-slate-800">{shipment.shipperName}</p>
                    <p className="text-sm text-slate-500 mt-1">{shipment.shipperAddress}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-400">Receiver</h4>
                    <p className="font-semibold text-slate-800">{shipment.receiverName}</p>
                    <p className="text-sm text-slate-500 mt-1">{shipment.receiverAddress}</p>
                  </div>
                </div>

                <div className="mt-4 border-t pt-4 flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-slate-400">Service</p>
                    <p className="font-medium text-slate-700">{shipment.service || "Standard"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Tracking ID</p>
                    <p className="font-medium text-slate-700">{shipment.trackingNumber}</p>
                  </div>
                </div>
              </div>

              {/* Packages table */}
              <div className="bg-white shadow rounded-xl p-4 border overflow-x-auto">
                <h3 className="font-semibold text-slate-800 mb-3">Package Details</h3>
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3">Type</th>
                      <th className="px-4 py-3">Description</th>
                      <th className="px-4 py-3">Dimensions</th>
                      <th className="px-4 py-3">Weight</th>
                      <th className="px-4 py-3">Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipment.packages?.map((pkg: any, i: number) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 align-top">{pkg.pieceType}</td>
                        <td className="px-4 py-3">{pkg.description}</td>
                        <td className="px-4 py-3">{pkg.dimensions || "-"}</td>
                        <td className="px-4 py-3">{pkg.weight}</td>
                        <td className="px-4 py-3">{pkg.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Timeline */}
              <div className="bg-white shadow rounded-xl p-6 border">
                <h3 className="font-semibold text-slate-800 mb-4">Shipment Timeline</h3>
                <div className="space-y-4">
                  {shipment.history?.length ? (
                    shipment.history.map((h: any, i: number) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-slate-300'}`}></div>
                          {i !== shipment.history.length - 1 && <div className="w-px h-full bg-slate-200 mt-1"></div>}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-semibold text-slate-700">{h.status}</p>
                              <p className="text-sm text-slate-500">{h.date} {h.time} • {h.location || 'Unknown'}</p>
                              {h.remarks && <p className="text-sm text-slate-400 mt-1">{h.remarks}</p>}
                            </div>
                            <div className="text-sm text-slate-400">By {h.updatedBy}</div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-500">No tracking history available yet.</p>
                  )}
                </div>
              </div>

            </main>
          </motion.div>
        ) : (
          <div className="mt-12 text-center text-slate-500">
            <p>Enter a tracking code to view shipment details.</p>
          </div>
        )}
      </div>
    </div>
  );
}
