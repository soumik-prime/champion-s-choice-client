import logo from '../../assets/logo.png'

const Aboutus = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">Welcome to Sports Equipment Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div className="space-y-4">
          <h2 className="text-lg sm:text-2xl font-semibold">What is Sport Equipment Store?</h2>
          <p className="md:text-lg">Our Sport Equipment Store is your premier online destination for top-quality sports accessories. Whether you're gearing up for your next match or looking to enhance your training, we offer a wide range of sports equipment, from apparel and footwear to specialized gear for various sports. Our mission is to make sports accessible to everyone, from beginners to seasoned athletes. With a focus on quality, affordability, and customer satisfaction, Equipment Store is here to support your athletic journey every step of the way.</p>
        </div>

        <div className="flex justify-center">
          <img
            src={logo}
            alt="Sports Equipment"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
