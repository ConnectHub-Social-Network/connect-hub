
import Sidebar from "../components/layout/Sidebar";

function SearchPage() {
  

  return (
     <div className="flex flex-row mt-10">
      <Sidebar />
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Search Users</h2>
        <form className="mb-4">
            <input
            type="text"
            placeholder="Search by username or email"
            className="w-full p-2 border rounded"
            />
            <button
            type="submit"
            className="mt-2 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
            Search
            </button>
        </form>



    </div>
    </div>
  );
}

export default SearchPage;
