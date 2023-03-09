import RegForm from "../designs/form/RegForm";

function RegisterUser() {
  return (
    <section className="w-full py-32 overflow-hidden bg-gray-200">
      <div className="absolute w-1/3 h-full bottom-0 right-0">
        <img
          src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="background image"
        />
      </div>
      <div className="w-full h-full container flex items-center">
        <div className="flex-1 max-w-[500px] ">
          <p className="tag mb-3">Justshop.com</p>
          <h2 className="mb-2">Create account</h2>
          <p className="max-w-md">Create account and lets get started.</p>
          <div className="mt-6">
            <RegForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterUser;
