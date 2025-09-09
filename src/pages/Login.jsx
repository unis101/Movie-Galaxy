export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-2xl mb-4">Welcome Back</h2>
      <input type="email" placeholder="Enter your email" className="mb-2 p-2 border rounded" />
      <input type="password" placeholder="Password" className="mb-2 p-2 border rounded" />
      <button className="bg-teal-400 px-4 py-2 rounded">Sign in</button>
      <p className="mt-2">Don’t have an account? <a href="#" className="text-blue-700">Sign up</a></p>
    </div>
  );
}