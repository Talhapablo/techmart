export default function SigninPage() {
    return (
        <div className="container">
            <div className="card">
                <h1>Sign In</h1>

                <input
                    type="email"
                    placeholder="Enter your email"
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Enter your password"
                />

                <br />
                <br />

                <button>Sign In</button>
            </div>
        </div>
    )
}