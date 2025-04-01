const OurStores = () => {
  const stores = [
    <>
      House #12,<br />
      Road #5, Block C,<br />
      Dhanmondi, Dhaka 1209,<br />
      Bangladesh.
    </>,

    <>Shop #5, <br />Sanmar Ocean City,<br />
      GEC Circle, Chattogram 4000,<br /> Bangladesh.</>,

    <>Holding #45, <br />KDA Avenue, <br />Sonadanga,
      Khulna 9100, <br />Bangladesh.</>,

    <>123 New Market Road, <br />Nilkhet,
      Dhaka 1205, <br />Bangladesh.</>,

    <>20/A Station Road, <br />Kotwali,
      Sylhet 3100, <br />Bangladesh.</>,

    <>Plot #3, <br />City Center, <br />Laxmipur,
      Rajshahi 6000, <br />Bangladesh.</>,

    <>Holding #78, <br />Sherpur Road, <br />Nishindara,
      Bogura 5800, Bangladesh.</>,

    <>Shop #10, <br />Jashore Shopping Complex,
      <br />Jashore 7400, <br />Bangladesh.</>
  ];

  return (
    <div className="p-6">
      <p className="text-3xl sm:text-4xl font-semibold text-base-content text-center mb-6">OUR STORES</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stores.map((store, index) => (
          <div key={index} className="p-4 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 shadow-lg rounded-lg border border-gray-300 items-center flex hover:bg-gray-200 transition">
            <p className="text-gray-600 dark:text-gray-300 text-md whitespace-pre-line text-left">{store}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStores;
