export default function SignupPage() {
    return (
        <div className="container">
            <div className="card">
                <h1>Create Account</h1>

                <input
                    type="text"
                    placeholder="Full Name"
                />

                <br />
                <br />

                <input
                    type="email"
                    placeholder="Email"
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                />

                <br />
                <br />

                <button>Create Account</button>
            </div>
        </div>
    );
}