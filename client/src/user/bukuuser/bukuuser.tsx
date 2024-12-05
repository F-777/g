// import { useState } from 'react';
// import assets from '../../assets/assets.ts';
import Sidebar from "../../components/sidebar"

function Bukuuser() {
  return (
    <>
      <div className="flex">
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 h-full">
          <Sidebar active="Buku Tamu" />
        </div>
        <div className="w-full pt-[78px]">
          <div className="p-12">
            <h1 className="text-3xl font-bold">Maaf! Halaman ini masih belum dibuat.</h1>
            <p className="opacity-50 mt-1">Buku Tamu</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bukuuser