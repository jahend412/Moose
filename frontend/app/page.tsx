export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Your Name</h1>
          <p className="text-xl mb-8">Musician • Songwriter • Performer</p>
          <div className="flex gap-4 justify-center">
            <a
              href="#latest"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Listen Now
            </a>
            <a
              href="/shows"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600"
            >
              View Shows
            </a>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section id="latest" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Latest Release
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="aspect-square bg-gray-200 rounded-lg mb-6">
              {/* Album art will go here */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Album Art
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Album Title</h3>
            <p className="text-gray-600 mb-4">Released 2024</p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Listen on Spotify
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Shows Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Upcoming Shows
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {/* Show card example */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Venue Name</h3>
                  <p className="text-gray-600">City, State</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Dec 15</p>
                  <p className="text-gray-600">8:00 PM</p>
                </div>
              </div>
            </div>
            {/* Add more show cards */}
          </div>
        </div>
      </section>
    </div>
  );
}
