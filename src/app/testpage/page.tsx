import TestItems from "@/components/TestItems";
import { teams } from "../api/data";

const testpage = () => {
  return (
    <main className="mt-20 min-h-screen flex justify-center items-center">
      {/* <div className=" max-w-7xl mx-auto grid grid-cols-4">
        <div>
          <h1>Item list</h1>
          {teams.map((team) => (
            <TestItems item={team} />
          ))}
        </div>
      </div> */}
    </main>
  );
};

export default testpage;
