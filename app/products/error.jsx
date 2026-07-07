"use client"

export default function Error({ error, reset }) {
    return (
        <div className="container">
            <div className="card">
                <h1>Something went wrong</h1>

                <p>{error.message}</p>

                <button onClick={() => reset()}>
                    Try Again
                </button>
            </div>
        </div>
    );
}
