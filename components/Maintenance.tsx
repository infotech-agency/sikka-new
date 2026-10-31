export function Maintenance() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <div className="mb-6 text-6xl">🛠️</div>
      <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
        Website Under Maintenance
      </h1>
      <p className="mb-2 max-w-md text-gray-600">
        We are currently performing scheduled maintenance to improve our website.
      </p>
      <p className="max-w-md text-gray-600">
        Please check back shortly. Thank you for your patience.
      </p>
      <p className="mt-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Sikka Engineering Company Pvt Limited
      </p>
    </div>
  );
}