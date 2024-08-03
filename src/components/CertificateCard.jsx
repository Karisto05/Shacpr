import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import Loader from './Loader';

const CertificateCard = () => {
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const param = query.get('param');

  useEffect(() => {
    setLoading(true);
    const fetchCertificate = async () => {
      try {
        const response = await fetch('/certificates.json');
        const data = await response.json();
        const foundCertificate = data.find(cert => cert.id === param);
        // const encodedData = await response.text();
        // const decodedData = JSON.parse(atob(encodedData.replace(/["]/g, '')));
        // const foundCertificate = decodedData.find(cert => cert.id === param);
        setCertificate(foundCertificate);
      } catch (error) {
        console.error('Error fetching certificate data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [param]);

  if(loading) {
    return (
      <div className='mt-14 h-96'>
        <Loader/>
      </div>
    )
  }

  return (
    <>
      <h2 className="text-4xl my-3 font-slab font-bold pb-2 text-center lg:hidden"><b>Certificate Verification</b></h2>
      <div className="my-24 max-w-5xl mx-auto bg-white custom-shadow p-6">
        <h2 className="lg:text-6xl text-5xl font-slab font-bold pb-2">Certificate Details</h2>
        <hr className='my-4' />
        {certificate ? 
          <>
            <p className='text-zinc-500 font-roboto text-sm mb-4 leading-relaxed'><b>Certificate Holder Name:</b> {certificate.certificateHolderName}</p>
            <p className='text-zinc-500 font-roboto text-sm mb-4 leading-relaxed'><b>Course Name:</b> {certificate.courseName}</p>
            <p className='text-zinc-500 font-roboto text-sm mb-4 leading-relaxed'><b>Certificate Valid From:</b> {certificate.certificateValidFrom}</p>
            <p className='text-zinc-500 font-roboto text-sm mb-4 leading-relaxed'><b>Certificate Expiry Date:</b> {certificate.certificateExpiryDate}</p>
          </>
        : <h2 className="lg:text-6xl text-5xl text-center font-slab font-bold pb-2 text-[#FF0000]">Invalid Certificate</h2>
        }
      </div>
    </>
  );
};

export default CertificateCard;
