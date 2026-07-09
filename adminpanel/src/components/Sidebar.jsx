import { Plus, List, ShoppingCart } from "lucide-react";
import {Link} from "react-router-dom"
function Sidebar() {
  return (
    <div className="w-full sm:w-64 bg-white border-r min-h-screen p-4">
      
      {/* Menu */}
      <div className="flex flex-col gap-3">
        
        {/* Active Item */}
        <Link to="/add"><div className="flex items-center gap-3 border border-pink-400 bg-pink-50 px-4 py-3 rounded-lg cursor-pointer">
          <Plus size={18} />
          <span className="font-medium">Add Items</span>
        </div></Link>

        {/* List Items */}
        <Link to="/list"><div className="flex items-center gap-3 border px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100">
          <List size={18} />
          <span>List Items</span>
        </div></Link>

        {/* Orders */}
        <Link to="/order"><div className="flex items-center gap-3 border px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100">
          <ShoppingCart size={18} />
          <span>Orders</span>
        </div></Link>

      </div>
    </div>
  );
}

export default Sidebar;