import { use, useEffect, useState } from "react";

export default function Portfolio() {
    const [repos, setRepos] = useState<GitHubResponse[]>([]);
    interface GitHubResponse {
        name: string;
        html_url: string;
        description: string | null;
    }

    async function getRepos() {
        const token = import.meta.env.VITE_API_URL;
        const response = await fetch('https://api.github.com/user/repos?per_page=100', {
            headers: {
                Authorization: `token ${token}`,
            },
        });
        const data = await response.json();

        // Ensure the data matches the GitHubResponse interface
        const formattedData: GitHubResponse[] = data.map((repo: any) => ({
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description,
        }));

        console.log(formattedData);

        setRepos(formattedData);
    }

    useEffect(() => {
        getRepos();
    }, []);

    // Split repos into two columns
    const midIndex = Math.ceil(repos.length / 2);
    const leftColumn = repos.slice(0, midIndex);
    const rightColumn = repos.slice(midIndex);

    return (
        <>
        <h2>My Public Repos</h2>
        <div className="container mt-4">
            <div style={{ display: 'flex', gap: '20px' }}>
                {/* Left Column */}
                <ul style={{ flex: 1 }}>
                    {leftColumn.map((repo) => (
                        <li key={repo.name} style={{ marginBottom: '20px' }}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                {repo.name}
                            </a>
                            <p style={{ fontSize: '16px', color: '#555' }}>
                                {repo.description ? repo.description : 'No description available.'}
                            </p>
                        </li>
                    ))}
                </ul>

                {/* Right Column */}
                <ul style={{ flex: 1 }}>
                    {rightColumn.map((repo) => (
                        <li key={repo.name} style={{ marginBottom: '20px' }}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                {repo.name}
                            </a>
                            <p style={{ fontSize: '16px', color: '#555' }}>
                                {repo.description ? repo.description : 'No description available.'}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
    );
}
