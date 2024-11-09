"use client"
import { useState } from 'react';

interface Review {
  name: string;
  location: string;
  review: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: 'Samantha Clark',
      location: 'Karachi, Pakistan',
      review: 'I’ve been using 𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨 for all my car repairs. Their team is super efficient and knows exactly what they’re doing. I’ve never been let down!',
    },
    {
      name: 'Ali Raza',
      location: 'Karachi, Pakistan',
      review: 'The service here is fantastic. I got my car\'s engine repaired and they provided excellent customer support throughout the process!',
    },
    {
      name: 'Mohammad Aslam',
      location: 'Karachi, Pakistan',
      review: 'Highly recommend 𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨 for their fast, affordable, and dependable car repair services. They never disappoint!',
    },
  ]);

  // Explicitly typing newReview as Review
  const [newReview, setNewReview] = useState<Review>({
    name: '',
    location: '',
    review: '',
  });

  const [successMessage, setSuccessMessage] = useState<string>('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', location: '', review: '' });
    setSuccessMessage('Review Submitted Successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); // Reset message after 3 seconds
  };

  return (
    <section className="bg-light-cream py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-dark-green mb-12 font-serif animate-shake">What Our Customers Say</h2>

        {/* Display Reviews */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transition transform hover:scale-105"
            >
              <div className="text-yellow-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.97 3.72a3 3 0 011.075-.947c.207-.136.441-.256.682-.368 1.11-.453 2.316-.458 3.418-.01l.54.306 1.048-.182a1 1 0 011.064.866l.216 2.186a1 1 0 01-.27.853l-2.61 2.539a1 1 0 01-.827.249l-1.13-.494a1 1 0 01-.706-.99l.132-1.093a1 1 0 01.226-.701l1.024-.974a3.014 3.014 0 01-.149-.038l-.198-.123a3.033 3.033 0 01-2.23-.532l-2.702 2.33a1 1 0 01-.428.14l-2.245-1.163a3.042 3.042 0 01-.788-.746 3.002 3.002 0 01-.574-.99l.345-2.876a1 1 0 01.553-.87z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-xl text-gray-700 mb-4">{review.review}</p>
              <div className="font-semibold text-dark-green text-black">{review.name}</div>
              <div className="text-sm text-gray-500">{review.location}</div>
            </div>
          ))}
        </div>

        {/* Review Submission Form */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-dark-green mb-4">Share Your Experience</h3>
          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div>
              <label htmlFor="name" className="block text-left text-dark-green ">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-left text-dark-green">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={newReview.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="review" className="block text-left text-dark-green">Your Review</label>
              <textarea
                id="review"
                name="review"
                value={newReview.review}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-yellow-600"
              >
                Submit Review
              </button>
            </div>
          </form>

          {/* Success Message */}
          {successMessage && (
            <div className="mt-6 text-green-500 font-semibold">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
