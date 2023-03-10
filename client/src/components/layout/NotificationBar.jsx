import { useEffect } from "react";
import { useNotifyContext } from "../context/notificationProvider";
import { GrFormClose } from "react-icons/gr";

function NotificationBar() {
  const [status, setStatus] = useNotifyContext();

  useEffect(() => {
    const interval = setInterval(() => {
      if (status.active) {
        setStatus({ ...status, active: false });
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [status.active]);

  return (
    <>
      <section
        className={`py-3 w-full h-fit duration-200 
        ${status?.success && "bg-green-300"}
        ${!status?.success && "bg-red-300"}
        ${
          status.active
            ? "mt-0 opacity-100 pointer-events-auto"
            : "-mt-10 opacity-0 pointer-events-none"
        }
        `}
      >
        <div className="container flex items-center justify-between">
          <p
            className={`text-base font-medium ${
              status?.success ? "text-green-700" : "text-red-700"
            }`}
          >
            {status.message}
          </p>
          <div
            onClick={() => setStatus({ ...status, active: false })}
            className={`p-1 text-xl cursor-pointer 
              ${status.success ? "bg-green-400" : "bg-red-400"}`}
          >
            <GrFormClose />
          </div>
        </div>
      </section>
    </>
  );
}

export default NotificationBar;
