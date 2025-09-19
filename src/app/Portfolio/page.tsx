"use client";

import React, { useState } from "react";

const Portfolio = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
                Portfolio
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Project Image</span>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Mental Health Platform
                        </h3>
                        <p className="text-gray-600 mb-4">
                            A comprehensive wellness application focused on mental health tracking and resources.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Node.js</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">MongoDB</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                View Live
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Project Image</span>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            E-commerce Website
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Modern e-commerce platform with seamless user experience and payment integration.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">TypeScript</span>
                            <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Stripe</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                View Live
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Project Image</span>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Digital Marketing Dashboard
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Analytics dashboard for tracking digital marketing campaigns and performance metrics.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Chart.js</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">API</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                View Live
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Frontend</h4>
                        <p className="text-sm text-gray-600">React, Next.js, TypeScript, Tailwind CSS</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Backend</h4>
                        <p className="text-sm text-gray-600">Node.js, Express, Python, API Development</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Database</h4>
                        <p className="text-sm text-gray-600">MongoDB, PostgreSQL, Firebase</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Tools</h4>
                        <p className="text-sm text-gray-600">Git, Docker, AWS, Vercel</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;