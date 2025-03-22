import React from 'react'

const Footer = () => {
        return (
                <div className="bg-[#f8f8f8] text-[#9c89b8] py-4">
                        <div className="container mx-auto text-center">
                                <footer>
                                <p>Built with ❤️ using React and Tailwind CSS.</p>
                                        <ul className="flex justify-center space-x-4 mt-2">
                                                <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#9c89b8]">GitHub</a></li>
                                                <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a></li>
                                                <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a></li>
                                                <li><a href="mailto:anisharawat21@gmail.com" className="hover:text-gray-400">Email</a></li>
                                        </ul>
                                </footer>
                        </div>
                </div>
        )
}

export default Footer