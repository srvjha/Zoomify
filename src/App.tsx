import ChatApp from './components/chatApp.tsx'

function App() {
 

  return (
   <div className="bg-black text-white min-h-screen">
    <div>
      <h1 className="text-3xl font-bold text-center">Welcome to my app</h1>
      <div>
        <ChatApp/>
      </div>
    </div>
   </div>
  )
}

export default App
