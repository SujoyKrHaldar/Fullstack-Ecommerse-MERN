import LoginForm from "../designs/form/LoginForm";

function LoginUser() {
  return (
    <section className="w-full h-screen py-32 overflow-hidden bg-gray-200">
      <div className="absolute w-1/3 h-full bottom-0 right-0">
        <img
          src="https://images.unsplash.com/photo-1528136964589-45cf5f1ddae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="background image"
        />
      </div>
      <div className="w-full h-full container flex items-center">
        <div className="w-full max-w-[450px]">
          <p className="tag mb-3">Justshop.com</p>
          <h2 className="mb-2">Login</h2>
          <div className="mt-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginUser;
