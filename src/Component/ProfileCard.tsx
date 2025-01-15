import React from 'react';

const ProfileCard: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="flex justify-center mt-4">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="rounded-full w-32 h-32 border-4 border-indigo-500"
                    />
                </div>
                <div className="p-6 text-center">
                    <h5 className="text-xl font-bold text-gray-800">John Doe</h5>
                    <p className="text-sm text-gray-600 mt-2">
                        Frontend Developer | React Enthusiast | Open Source Contributor
                    </p>
                    <button
                        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
                    >
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
