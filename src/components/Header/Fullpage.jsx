import React from 'react';

function App() { 
  return (
    // 1. MAIN CONTAINER)
    <div className="flex flex-col h-screen">
      
      {/* 2.TOP HEADER*/}
      <header className="bg-blue-600 text-white p-4 h-16 flex items-center shadow-md gap-2">
        <img className="h-8 w-8 rounded-full object-cover object-center " src="https://imgs.search.brave.com/Rhl8Pk3v7Q8FTv_qO_rZwbF9Ju7gVGriiyug35M8g4w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYXRm/aW5nZXIuaW8vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDEv/SFNFUS1lbnZpcm9u/bWVudGFsLXBvbGlj/aWVzLnBuZw" alt=""/>
        <span className="text-xl font-semibold ">HSEFQ  .Dev</span>
      </header>

      {/* 3. MAIN BODY (Horizontal Stack: Sidebar + Content) */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* 4. LEFT SIDEBAR */}
        <div className="w-64 bg-gray-800 text-white p-4 hidden md:block">
          <ul className="space-y-4 divide-y divide-gray-700">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer ">Dashboard</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Home</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">About</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Contact - Us</li>
          </ul>
        </div>

        {/* 5. CENTER CONTENT AREA */}
        <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Empowering Safer, Smarter Workplaces</h2>
            <p className="text-gray-700">
              At HSEFQ, we provide practical safety and compliance solutions across Health, Safety, Environment, Fire, and Quality management. Our digital-first approach ensures efficient reporting, real-time dashboards, and full regulatory alignment.
            </p>
            {/* Adding dummy content to show scrolling */}
            <div className="mt-4 h-96 bg-blue-50 rounded px-10 py-12 text-2xl">
             <p className='text-lg'>
               The Professional Plan is tailored for mid-sized organizations that require more advanced features and customization. It offers all the capabilities of the Standard Plan along with enhanced reporting tools, user access roles, CAPA management, and analytics dashboards for deeper insights.<br />HSEFQ Stands for :-</p>
            <div className='text-lg'>
              H- Health <br />
              S- Safety <br />
              E- Environment <br />
              F- Finance <br />
              Q- Quality
            </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;