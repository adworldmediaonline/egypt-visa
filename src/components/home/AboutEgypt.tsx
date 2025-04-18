export default function AboutEgypt() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Egypt</h2>
                        <p className="text-gray-600 mb-4">
                            Egypt, officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia.
                            With a rich history dating back to the ancient civilization of the Nile Valley, Egypt is home to one of the world's oldest and most influential civilizations.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Home to diverse landscapes from the Nile River Valley to the Western Desert, Egypt offers visitors a unique experience
                            with its magnificent monuments, ancient temples, and breathtaking natural beauty.
                        </p>
                        <p className="text-gray-600">
                            Egypt is known for its iconic pyramids, sphinx, and ancient temples. The country hosts seven UNESCO
                            World Heritage sites, including the Pyramids of Giza, the ancient city of Thebes, and the Abu Simbel temples.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Facts</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center mr-2 mt-1">
                                    <span className="text-white text-xs">✓</span>
                                </span>
                                <span><strong>Capital:</strong> Cairo</span>
                            </li>
                            <li className="flex items-start">
                                <span className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center mr-2 mt-1">
                                    <span className="text-white text-xs">✓</span>
                                </span>
                                <span><strong>Official Language:</strong> Arabic</span>
                            </li>
                            <li className="flex items-start">
                                <span className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center mr-2 mt-1">
                                    <span className="text-white text-xs">✓</span>
                                </span>
                                <span><strong>Currency:</strong> Egyptian Pound (EGP)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center mr-2 mt-1">
                                    <span className="text-white text-xs">✓</span>
                                </span>
                                <span><strong>Time Zone:</strong> Eastern European Time (GMT+2)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center mr-2 mt-1">
                                    <span className="text-white text-xs">✓</span>
                                </span>
                                <span><strong>Best Time to Visit:</strong> October to April (cooler season)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
