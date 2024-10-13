import React, { useState } from "react";
import './App.css';

function LinkEmbed() {
  const [links, setLinks] = useState('');
  const [followerCounts, setFollowerCounts] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleGenerate = () => {
    setError(null);

    // Split links and follower counts by new lines and filter out empty entries
    const linkList = links.split('\n').map(link => link.trim()).filter(link => link);
    const followerList = followerCounts.split('\n').map(count => count.trim()).filter(count => count);

    if (linkList.length !== followerList.length) {
      setError('The number of links and follower counts do not match.');
      return;
    }

    const generatedResults = linkList.map((link, index) => ({
      link,
      followers: followerList[index],
    }));

    setResults(generatedResults);
  };

  return (
    <section>
          <div className="App container mx-auto p-4 bg-black2 text-black5 min-h-screen">
      <h1 className="text-7xl font-bold text-center mb-8 text-black5">
          Link <span className="text-blue-700 underline">Embed</span> 
      </h1>

      {/* Link input */}
      <div className="mb-6">
        <textarea
          className="w-full p-3 text-black5 bg-black1 border border-black4 rounded-md focus:outline-none focus:ring-2 focus:ring-black5 resize-none h-40"
          placeholder="Enter links (one per line)"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
        />
      </div>

      {/* Follower counts input */}
      <div className="mb-6">
        <textarea
          className="w-full p-3 text-black5 bg-black1 border border-black4 rounded-md focus:outline-none focus:ring-2 focus:ring-black5 resize-none h-40"
          placeholder="Enter Embed Titles (one per line)"
          value={followerCounts}
          onChange={(e) => setFollowerCounts(e.target.value)}
        />
      </div>

      {/* Generate button */}
      <div className="text-center">
      <div className="button-container">
      <button
        onClick={handleGenerate}
        className="px-6 py-2 bg-black1 text-white rounded-md font-medium hover:bg-black4 hover:text-black1 transition-all transform active:scale-95  focus:outline-none"
      >
        Generate
      </button>

        </div>

      </div>

      {error && (
        <div className="mt-4 text-red-500 text-center">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-black5 text-center">
            Generated Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-lg bg-black2 text-white">
                  <th className="py-3 px-4">Embeded Link</th>
                  <th className="py-3 px-4">Link</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {results.map((result, index) => (
                  <tr key={index} className="border-t border-black4 text-black1">
                    <td className="py-2 px-4">
                      <a
                        href={result.link}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {result.followers}
                      </a>
                    </td>
                    <td className="py-2 px-4">
                      {result.link}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      

    </div>
    <footer className="w-full bg-black1 botom-0 text-gray-300 py-6">
    <div className="container mx-auto text-center">
      <p className="text-sm md:text-base">
        © 2024 <span className="font-bold text-white">Link Embed Tool</span>. All rights reserved.
      </p>
  
    </div>
  </footer>
    </section>

  );
}

export default LinkEmbed;
